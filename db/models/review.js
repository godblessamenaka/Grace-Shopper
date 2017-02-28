'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.TEXT,
    validate: {
			isEmpty: false
		}
  },
  rating: {
    type: Sequelize.INTEGER
  }
});

module.exports = Review;
