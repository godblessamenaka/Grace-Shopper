'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Review = require('../review')
const { expect } = require('chai')

describe('Review model tests', () => {
  //clear db before tests
  beforeEach('wait for the db', () => db.sync({
    force: true
  }))

  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('Review Model', () => {
    it('can set title, body, rating of a new instance', () =>
      Review.create({
        title: 'test review',
        body: 'we definitely remembered to write tests',
        rating: 3,
      })
      .then(review => {
        expect(review.title).to.equal('test review');
        expect(review.body).to.equal('we definitely remembered to write tests');
        expect(review.rating).to.equal(3);
      })
    )
  })

  describe('Validations', () => {
    it('requires a title', () => {
      let review = Review.build({
        body: 'we definitely remembered to write tests',
        rating: 3
      })
      return review.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
    it('title is not empty', () => {
      let review = Review.build({
        title: '',
        body: 'we definitely remembered to write tests',
        rating: 3
      })
      return review.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })

    it('requires a body', () => {
      let review = Review.build({
        title: 'test review',
        rating: 4
      })
      return review.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
  })
})
