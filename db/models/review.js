'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.TEXT,
    validate: {
			notEmpty: true
		}
  },
  rating: {
    type: Sequelize.INTEGER
  }
});

module.exports = Review;
