import { combineReducers } from 'redux'
import categoryReducer from './categories'
import productReducer from './products'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  categories: categoryReducer,
  products: productReducer
})

export default rootReducer
