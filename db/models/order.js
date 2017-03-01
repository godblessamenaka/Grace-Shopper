'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')
const OrderLine = require('./orderLine')

const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed'),
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  getterMethods: {
    // WE CAN DO THIS ON THE FRINT END
    totalPrice: function () {
        OrderLine.findAll({
            where: {
              order_id: this.id
            }
          })
          .then((orderLines) => {
            if (orderLines) {
              const total = orderLines.reduce((sum, line) => sum + line.price, 0)
              console.log(total)
              return total
            }
          })
      }
  }
});


module.exports = Order;
