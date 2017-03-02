'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Category = require('../category')
const {expect} = require('chai')

describe('Category', () => {
  //clear db before tests
  before('Make sure db is done syncing', () => db.didSync)

  beforeEach('wait for the db', () => db.sync({
    force: true
  }))

  describe('Category Model', () => {
    it('can set name of a new instance', () =>
      Category.create({name: 'expensive'})
      .then(category => expect(category.name).to.equal('expensive'))
    )
  })

  describe('Validation', () => {
    it('requires a name', () => {
      let category = Category.build({name: ''})
      return category.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error);
      })
    })
    it('cannot have null name', () => {
      let category = Category.build({name: null})
      return category.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error);
      })
    })
  })


})
