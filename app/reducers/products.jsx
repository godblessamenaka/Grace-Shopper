import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT} from '../actions/products'

const initialState = {
  allProducts: [],
  selectedProduct: {}
}

const productReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_PRODUCTS:
      newState.allProducts = action.receivedProducts
      break;

    case GET_PRODUCT:
      newState.selectedProduct = action.receivedProduct
      break;

    case CREATE_PRODUCT:
      newState.allProducts = [action.productToCreate, ...newState.allProducts]

    case UPDATE_PRODUCT:
      newState.selectedProduct = newState.allProducts.map(product => (
        action.productToUpdate.id === product.id ? action.productToUpdate : product
      ))
      break

    default:
      return state
  }
  return newState;
}

export default productReducer;
