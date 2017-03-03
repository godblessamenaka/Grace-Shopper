import { GET_CART, UPDATE_CART} from '../actions/carts'

const initialState = [];

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_CART:
      return action.receivedCart
    case UPDATE_CART:
      return [state, ...action.payload]
    default:
      return state
  }
}

export default cartReducer;

