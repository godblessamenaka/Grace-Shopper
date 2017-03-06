const db = require('APP/db')
const Product = db.model('products')
const Category = db.model('categories')

module.exports = require('express').Router()

// get all products
.get('/', (req, res, next) =>
    Product.findAll({include: [{model: Category}]})
    .then(products => res.json(products))
    .catch(next))

// get a single product by productId
.get('/:productId', (req, res, next) =>
    Product.findById(req.params.productId)
    .then(product => res.json(product))
    .catch(next))

// get products by category
.get('/category/:categoryId', (req, res, next) =>
	Category.getProducts({
		where: {
			category_id: req.params.categoryId
		}
	})
	.then(products => res.json(products))
	.catch(next))


//Revise finding all products for query.

// .get('/', (req, res, next) =>
// 	Product.findAll({
// 		where: {
// 			name: {
// 				$like: '%' + req.query.search + '%'
// 			}
// 		}
// 	})
// 	)

//admin only
.put('/:productId', (req, res, next) =>
    Product.findById(req.params.productId)
    .then(product => product.update(req.body))
	.then(updatedProduct => res.json(updatedProduct))
    .catch(next))

//admin only
.post('/', (req, res, next) =>
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(next))
