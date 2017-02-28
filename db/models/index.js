'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Review = require('./review')
const Orders = require('./orders')
const OrderLines = require('./orderLines')

OAuth.belongsTo(User)
User.hasOne(OAuth)
Review.belongsTo(User)
Orders.belongsTo(User)
OrderLines.belongsTo(Orders)

module.exports = {User, Review, Orders, OrderLines}
