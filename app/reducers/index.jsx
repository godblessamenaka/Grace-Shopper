import { combineReducers } from 'redux'
import categoryReducer from './categories'
import productReducer from './products'
import orderReducer from './orders'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  categories: categoryReducer,
  products: productReducer,
  orders: orderReducer
})

export default rootReducer
