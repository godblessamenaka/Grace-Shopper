const db = require('APP/db')
const OrderLines = db.model('orderLines')
const Product = db.model('products')

module.exports = require('express').Router()
    .get('/:orderId', (req, res, next) =>
        OrderLines.findAll({
            where: {
                order_id: req.params.orderId
            },
            include: [{model: Product, as: 'product'}]
        })
        .then((orderLines) => res.json(orderLines)))
