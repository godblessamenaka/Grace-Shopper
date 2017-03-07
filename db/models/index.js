'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')

const Review = require('./review')
const Order = require('./order')
const OrderLine = require('./orderLine')
const Product = require('./product')
const Category = require('./category')

//one to one
OAuth.belongsTo(User)
User.hasOne(OAuth)

//one to many
Order.belongsTo(User)
Review.belongsTo(User, {as: 'user'})
Review.belongsTo(Product, {as: 'product'})
OrderLine.belongsTo(Order, {as: 'order'})
Order.hasMany(OrderLine)
OrderLine.belongsTo(Product, {as: 'product'})

//many to many
Product.belongsToMany(Category, {through: 'ProductCategory'})
Category.belongsToMany(Product, {through: 'ProductCategory'})

module.exports = {User, Review, Order, OrderLine, Product, Category}
