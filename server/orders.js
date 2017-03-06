const db = require('APP/db')
const Order = db.model('orders')
const OrderLines = db.model('orderLines')
const {forbidden} = require('./auth.filters')

module.exports = require('express').Router()

// get all orders
.get('/', (req, res, next) =>
    Order.findAll()
    .then(foundOrder => res.json(foundOrder))
    .catch(next))

// get order by id
  .get('/:id', (req, res, next) =>
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(next))

// add a new order
  .post('/', (req, res, next) =>
    Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))

// update an order (status)
  .put('/:id', (req, res, next) =>
    Order.findById(req.params.id)
    .then(order => order.update(req.body))
    .catch(next))

//get all orders for a user
  .get('/users/:userId', (req,res,next) => {
  console.log('before findAll');
  return Order.findAll({
    where: {
      user_id: req.params.userId
    },
    include: [{all: true}]
  })
  .then(orders => {
    console.log(orders)
    res.json(orders);
  })
  .catch(next)})
