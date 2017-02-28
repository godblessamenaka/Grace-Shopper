'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')

const Review = require('./review')
const Orders = require('./orders')
const OrderLines = require('./orderLines')
const Product = require('./product')
const Category = require('./category')

OAuth.belongsTo(User)
User.hasOne(OAuth)
Review.belongsTo(User)
Orders.belongsTo(User)
OrderLines.belongsTo(Orders)
Product.belongsToMany(Category, {through: 'ProductCategory'})
Category.belongsToMany(Product, {through: 'ProductCategory'})

module.exports = {User, Review, Orders, OrderLines, Product, Category}
