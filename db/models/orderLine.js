'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderLine = db.define('orderLines', {
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  totalPrice: {
      type: Sequelize.VIRTUAL,
      get: function(){
          return this.getDataValue('price') * this.getDataValue('quantity')
      }
  }
});

module.exports = OrderLine;
