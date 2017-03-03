import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT} from '../actions/products'

let initialState = {
  allProducts: [],
  currentProduct: {}
}
const productReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_PRODUCTS:
      newState.allProducts =  action.receivedProducts
      break

    case GET_PRODUCT:
      newState.currentProduct = action.receivedProduct
      break

    case CREATE_PRODUCT:
      newState.allProducts = [action.productToCreate, ...newState.allProducts]
      break

    case UPDATE_PRODUCT:
      newState.allProducts =  newState.allProducts.map(product => (
        action.productToUpdate.id === product.id ? action.productToUpdate : product
      ));
      break

    default:
      return state
  }
  return newState;
}

export default productReducer;

