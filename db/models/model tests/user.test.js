'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const User = require('../user')
const {expect} = require('chai')

describe('User', () => {
  //clear db before tests
  before('Make sure db is done syncing', () => db.didSync)

  beforeEach('wait for the db', () => db.sync({
    force: true
  }))

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false))
  })


  describe('User Model', () => {
    it('can set name, isAdmin, email, and password', () =>
      User.create({
        name: 'Joe A',
        isAdmin: true,
        email: 'joe@joe.joe',
        password: 'fullstack'
      })
      .then(user => {
        expect(user.name).to.equal('Joe A');
        expect(user.isAdmin).to.equal(true);
        expect(user.email).to.equal('joe@joe.joe');
      })
    )
  })

  describe('Validations', () => {
    it('isAdmin is defaulted to false', () =>
      User.create({
        name: 'Jess p',
        email: 'jess@jess.jess',
        password: 'fullstack'
      })
      .then(user => {
        expect(user.isAdmin).to.equal(false)
      })
    );
    it('throws an error if email is empty', () => {
      let user = User.build({
        name: 'J A',
        isAdmin: false,
        email: '',
        password: 'fullstack'
      })
      return user.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
    it('throws an error if email is not in email format', () => {
      let user = User.build({
        name: 'J A',
        isAdmin: false,
        email: 'nah',
        password: 'fullstack'
      })
      return user.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
  })

})

