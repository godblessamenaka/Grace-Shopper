'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const User = db.model('users')
const Order = db.model('orders')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router() // eslint-disable-line new-cap
  //get all users (admin only)
  .get('/', (req, res, next) =>
    User.findAll()
    .then(users => res.json(users))
    .catch(next))
  //create new user
  .post('/', (req, res, next) =>
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next))
  //get users own info
  .get('/:id', (req, res, next) =>
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next))
  //get all users own past orders
  .get('/:id/orders', (req, res, next) =>
    Order.findAll({
      where: {
        user_id: req.params.id
      }
    })
    .then(orders => res.json(orders))
    .catch(next))
  //get users own specified order
  .get('/:id/orders/:orderId', (req, res, next) =>
    Order.find({
      where: {
        user_id: req.params.id,
        id: req.params.orderId
      }
    })
    .then(order => res.json(order))
    .catch(next))
  //change a users isAdmin status (Admin only)
  .put('/:id', (req, res, next) =>
    User.update({
      isAdmin: req.body.isAdmin
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(updatedUser => res.json(updatedUser))
    .catch(next))
   //delete a user (Admin only)
   .delete('/:id', (req, res, next) =>
    User.findById(req.params.id)
    .then((userToDelete) => userToDelete.destroy())
    .then(() => res.send('user deleted'))
    .catch(next))
