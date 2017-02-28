'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const Category = require('./models/category.js')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {name: 'Love Potion #9',
   description: 'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.  - Oscar Wilde',
   image: 'lovepotion9.jpg',
   price: 300.00,
   inventory: 10,
   categories: {name: 'Love'}
  },
  {name: 'Love Potion #10',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   price: 220.00,
   inventory: 10
  },
  {name: 'Love Potion #11',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   price: 220.00,
   inventory: 10
  },
  {name: 'Felix Felicis',
   description: 'Felix Felicis, also called "Liquid Luck", is a magical potion that makes the drinker lucky for a period of time, during which everything they attempt will be successful.',
   price: 220.00,
   inventory: 10
  },
  {name: 'Lucky #7',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   price: 220.00,
   inventory: 10
  },
  {name: 'Polyjuice Potion',
   description: `The Polyjuice Potion, which is a complex and time-consuming concoction, is best left to highly skilled witches and wizards. It enables the consumer to assume the physical appearance of another person, as long as they have first procured part of that individual's body to add to the brew (this may be anything — toenail clippings, dandruff or worse — but it is most usual to use hair). The idea that a witch or wizard might make evil use of parts of the body is an ancient one, and exists in the folklore and superstitions of many cultures. The effect of the potion is only temporary, and depending on how well it has been brewed, may last anything from between ten minutes and twelve hours. You can change age, sex, and race by taking the Polyjuice Potion, but not species.`,
   price: 300.00
  },
], product => db.model('products').create(product, {include: [{
	model: Category,
	as: 'categories'}]}
	))


const seedCategories = () => db.Promise.map([
  {name: 'Love'},
  {name: 'Luck'},
  {name: 'Organic'}
], category => db.model('categories').create(category))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
