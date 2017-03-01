'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Product = require('../product')
const {
  expect
} = require('chai')

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
})
