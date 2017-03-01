const db = require('APP/db')
const Review = db.model('reviews')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()

// get all reviews (admin only)
.get('/', forbidden('only admins can list all reviews'), (req, res, next) =>
    Review.findAll()
    .then(reviews => res.json(reviews))
    .catch(next))

// get all reviews for a product by productId
  .get('/:productId', (req, res, next) =>
    Review.find({
      where: {
        productId: req.params.productId
      }
    })
    .then(reviews => res.json(reviews))
    .catch(next))

// add a new review
  .post('/:productId', (req, res, next) =>
    Review.create(req.body)
    .then(review => review.setProduct(req.params.productId))
    .then(updatedReview => res.status(201).json(updatedReview))
    .catch(next))
