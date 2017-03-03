import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT} from '../actions/products'

const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.receivedProducts
    case GET_PRODUCT:
      return action.receivedProduct
    case CREATE_PRODUCT:
      return action.productToCreate
    case UPDATE_PRODUCT:
      return action.productToUpdate
    default:
      return state
  }
}

export default productReducer;
