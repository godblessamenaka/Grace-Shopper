'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Order = require('../order')
const { expect } = require('chai')

describe('Order model tests', () => {
  //clear db before tests
  beforeEach('wait for the db', () => db.sync({
    force: true
  }))

  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('Order Model', () => {
    it('can set status and date of a new instance', () =>
      Order.create({
        status: 'processing',
        date: new Date(2016, 11, 17)
      })
      .then(order => {
        expect(order.status).to.equal('processing');
        expect(order.date).to.equal('Sat Dec 17 2016 00:00:00 GMT-0500 (EST)');
      })
    )
  })

  describe('Validations', () => {
    it('requires a status', () => {
      let order = Order.build({
        date: new Date(2016, 11, 17)
      })
      return order.validate()
        .then(result => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
  })

  describe('getterMethods', () => {
    describe('totalPrice', () => {
      it('exists', () => {
        expect(Order.totalPrice).to.be.a('function');
      })
    })
  })
})

