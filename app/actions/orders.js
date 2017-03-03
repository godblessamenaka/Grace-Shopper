export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDER = 'GET_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';

export const getOrders = (orders) => ({ type: GET_ORDERS, receivedOrders: orders});
export const getOrder = (order) => ({ type: GET_ORDER, receivedOrder: order});
export const createOrder = (order) => ({ type: CREATE_ORDER, orderToCreate: order});
export const deleteOrder = (order) => ({ type: DELETE_ORDER, orderToDelete: order});
export const updateOrder = (order) => ({ type: UPDATE_ORDER, orderToUpdate: order});
