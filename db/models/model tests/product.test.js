'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Product = require('../product')
const Review = require('../review')
const {expect} = require('chai')
const Promise = require('bluebird')

describe('Product', () => {
  //clear db before tests
  before('Make sure db is done syncing', () => db.didSync)

  beforeEach('wait for the db', () => db.sync({
    force: true
  }))

  describe('Product Model', () => {
    it('can set name, description, image, price, and quantity of a new instance', () =>
      Product.create({
        name: 'test product',
        description: 'we definitely remembered to write tests',
        image: 'test.jpg',
        price: 120.25,
        inventory: 189
      })
      .then(product => {
        expect(product.name).to.equal('test product');
        expect(product.description).to.equal('we definitely remembered to write tests');
        expect(product.image).to.equal('test.jpg');
        expect(product.price).to.equal(120.25);
        expect(product.inventory).to.equal(189);
      })
    )
  })

  describe('Validations', () => {
    it('repaces image with placeholder if none supplied', () =>
      Product.create({
        name: 'test product',
        description: 'we definitely remembered to write tests',
        price: 120.25,
        inventory: 189
      })
      .then(product => {
        expect(product.image).to.equal('default.jpg')
      })
    );
    it('sets inventory to 0 if none supplied', () =>
      Product.create({
        name: 'test product',
        description: 'we definitely remembered to write tests',
        price: 120.25,
      })
      .then(product => {
        expect(product.inventory).to.equal(0)
      })
    )
    it('requires a name', () => {
      let product = Product.build({
        description: 'we definitely remembered to write tests',
        price: 120.25,
      })
      return product.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
    it('requires a description', () => {
      let product = Product.build({
        name: 'testosterone potion',
        price: 120.25,
      })
      return product.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
    it('requires a price', () => {
      let product = Product.build({
        name: 'testosterone potion',
        description: 'we definitely remembered to write tests',
      })
      return product.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
  })

  describe('Virtual Getter', () => {
    it('generates an average rating for a product', () =>
      {let creatingProduct = Product.create({
        name: 'dummy product',
        description: 'we check our virtual getters',
        price: 120.25,
        inventory: 189
      })
      let creatingReview = Review.bulkCreate([
        {title: 'Love this!', body: 'Met my husband with this potion', rating: 5},
        {title: 'Hate this!', body: 'Some creepy dude started stalking me!', rating: 1}
      ]);
      return Promise.all([creatingProduct, creatingReview])
      .spread(function(createdProduct, createdReview) {
         createdReview[0].setProduct(createdProduct)
         createdReview[1].setProduct(createdProduct)
      })
      .then(function() {
        return Product.findById(1)
      })
      .then(foundProduct => {
        return foundProduct.averageRating
      })
    });
  });

})
