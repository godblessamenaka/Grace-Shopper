'use strict';
const db = require('APP/db');

//util function to populate orders
const makeDate = function (num) {
  let date = new Date();
  date.setDate(date.getDate() - num);
  return date;
};

//seed functions per Model
const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
  { name: 'Love Potion #9',
    description: 'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.  - Oscar Wilde',
    image: 'lovepotion9.jpg',
    price: 300.00,
    inventory: 10
    // categories: { name: 'Love' }
  },
  { name: 'Love Potion #10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 220.00,
    inventory: 10
  },
  { name: 'Love Potion #11',
    description: 'O R G A N I C',
    price: 220.00,
    inventory: 10
    // categories: { name: 'Love',  }
  },
  { name: 'Felix Felicis',
    description: 'Felix Felicis, also called "Liquid Luck", is a magical potion that makes the drinker lucky for a period of time, during which everything they attempt will be successful.',
    price: 220.00,
    inventory: 10
  },
  { name: 'Lucky #7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 220.00,
    inventory: 10
  },
  { name: 'Polyjuice Potion',
    description: `The Polyjuice Potion, which is a complex and time-consuming concoction, is best left to highly skilled witches and wizards. It enables the consumer to assume the physical appearance of another person, as long as they have first procured part of that individual's body to add to the brew (this may be anything — toenail clippings, dandruff or worse — but it is most usual to use hair). The idea that a witch or wizard might make evil use of parts of the body is an ancient one, and exists in the folklore and superstitions of many cultures. The effect of the potion is only temporary, and depending on how well it has been brewed, may last anything from between ten minutes and twelve hours. You can change age, sex, and race by taking the Polyjuice Potion, but not species.`,
    price: 300.00
  },
], product => db.model('products').create(product));

const seedCategories = () => db.Promise.map([
  {name: 'Love'},
  {name: 'Luck'},
  {name: 'Organic'}
], category => db.model('categories').create(category));


const seedOrders = () => db.Promise.map([
  {status: 'created', date: new Date},
  {status: 'processing', date: makeDate(4)},
  {status: 'cancelled', date: makeDate(20)},
  {status: 'completed', date: makeDate(25)}
], order => db.model('orders').create(order));

const seedOrderLines = () => db.Promise.map([
  {price: 420.69, quantity: 1},
  {price: 125.25, quantity: 2},
  {price: 34.25, quantity: 3},
  {price: 1.25, quantity: 2},
  {price: 99.25, quantity: 2}
], orderLine => db.model('orderLines').create(orderLine));

const seedReviews = () => db.Promise.map([
  {title: 'i love it', body: 'jk', rating: 1},
  {title: 'turned into duck', body: `I'm not sure if this is good or bad tbh`, rating: 3},
  {title: 'uhhhhhhh', body: 'nnnnnnn', rating: 4}
], review => db.model('reviews').create(review));

db.didSync
  .then(() => db.sync({force: false}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProducts)
  .then(products => {
    console.log(`Seeded ${products.length} products OK`);
    return products[2].setCategories([2, 3])
      .then(() => console.log('gave a product 2 categories'))
  })
  .then(seedOrders)
  .then(orders => {
    console.log(`Seeded ${orders.length} orders OK`);
    return orders[1].setUser(1)
      .then(() => console.log('gave an order a user'));
  })
  .then(seedOrderLines)
  .then(orderLines => {
    console.log(`Seeded ${orderLines.length} order lines OK`);
    return Promise.all([orderLines[1].setProduct(2), orderLines[1].setOrder(1)])
      .then(() => console.log('gave a line a product and order id'))
  })
  .then(seedReviews)
  .then(reviews => {
    console.log(`Seeded ${reviews.length} reviews OK`);
    return Promise.all([reviews[2].setProduct(2), reviews[0].setUser(1)])
      .then(() => console.log('gave a review a product and user id'))
  })
  .then(() => console.log('db seeded OKUUURRRRRRRRRRRRR'))
  .catch(error => console.error(error))
  .finally(() => db.close());
