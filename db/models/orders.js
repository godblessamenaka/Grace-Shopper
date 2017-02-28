'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Orders = db.define('orders', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed')
  },
  date: {
    type: Sequelize.DATE
  }
},
// {
//     instanceMethode: {
//         totalPrice: function(){
//             getOrderLines({
//                 where: {
//                     orderId: this.id
//                 }
//             })
//             .then((orderLines) => {

//             })
//         }
//     }
// }
);

module.exports = Orders;
