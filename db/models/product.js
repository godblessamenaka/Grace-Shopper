'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')
const Review = require('./review')


const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'default.jpg'
    },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  }

}, {

  getterMethods: {
    averageRating: function () {
      Review.findAll({
        where: {product_id: this.id}
      })
      .then(reviews =>
        {if (reviews){
          const total = reviews.reduce((sum, review) => sum + review.rating, 0)
          const length = reviews.length
          return total / length;
        }}
      )
    }
  }

})

module.exports = Product
