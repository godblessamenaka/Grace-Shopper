import { GET_CART, UPDATE_CART_ITEM} from '../actions/cart'

const initialState = [];

const cartReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case GET_CART:
      return action.receivedCart

    case UPDATE_CART_ITEM:
      newState = state.filter(item => item.id !== action.item.id);
      newState.push(action.item)
      return newState

    default:
      return state
  }
}

export default cartReducer;

