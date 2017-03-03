import { combineReducers } from 'redux'
import categoryReducer from './categories'
import productReducer from './products'
import orderReducer from './orders'
import reviewReducer from './reviews'
import cartReducer from './cart'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  categories: categoryReducer,
  products: productReducer,
  orders: orderReducer,
  reviews: reviewReducer,
  cart: cartReducer
})

export default rootReducer
