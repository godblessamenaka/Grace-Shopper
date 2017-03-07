import { GET_ORDERS, GET_ORDER, CREATE_ORDER, DELETE_ORDER, UPDATE_ORDER, GET_ORDERS_BY_USER} from '../actions/orders'

const initialState = {
  allOrders: [],
  selectedOrder: {},
  currentUsersOrders: []
}

const orderReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_ORDERS:
      newState.allOrders = action.receivedOrders
      break

    case GET_ORDER:
      newState.selectedOrder = action.receivedOrder
      break

    case CREATE_ORDER:
      newState.allOrders = [action.orderToCreate, ...newState.allOrders]
      break

    case DELETE_ORDER:
      newState.allOrders = newState.allOrders.filter(order => order.id !== action.orderToDelete.id)
      break

    case UPDATE_ORDER:
      newState.selectedOrder = newState.allOrders.map(order => (
        action.order.id === order.id ? action.orderToUpdate : order
      ))
      break

    case GET_ORDERS_BY_USER:
      newState.currentUsersOrders = action.currentUsersOrders
      break;

    default:
      return state
  }
  return newState
}

export default orderReducer;

