'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed')
  },
  date: {
    type: Sequelize.DATE
  },
  totalPrice: {
    type: Sequelize.VIRTUAL,
    get: function () {
      this.getOder({
          where: {
            orderId: this.id
          }
        })
        .then((orderLines) => orderLines)
    }
  }
});


module.exports = Order;
