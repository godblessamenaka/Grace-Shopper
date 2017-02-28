'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderLines = db.define('orderLines', {
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
}, {
    instanceMethode: {
        totalPrice: function(){
            return this.price * this.quantity
        }
    }
});

module.exports = OrderLines;
