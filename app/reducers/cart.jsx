import { GET_CART, UPDATE_CART} from '../actions/carts'

const initialState = {
  cart: [],
}

const cartReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_CART:
      newState.cart = action.receivedCart
      break;
    case UPDATE_CART:
      newState.cart = [newState, ...newState.cart]
      break;
    default:
      return state
  }
}

export default cartReducer;

