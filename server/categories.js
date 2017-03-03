const db = require('APP/db')
const Category = db.model('categories')

module.exports = require('express').Router()

.get('/', (req, res, next) =>
    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next))

.get('/:id', (req,res,next) =>
    Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(next))

.post('/', (req, res, next) =>
    Category.create(req.body)
    .then(newCat => res.json(newCat))
    .catch(next))
