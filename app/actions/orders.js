import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDER = 'GET_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';

/* ------------   ACTION CREATORS     ------------------ */
const getOrders = (orders) => ({ type: GET_ORDERS, receivedOrders: orders });
const getOrder = (order) => ({ type: GET_ORDER, receivedOrder: order });
const createOrder = (order) => ({ type: CREATE_ORDER, orderToCreate: order });
const deleteOrder = (order) => ({ type: DELETE_ORDER, orderToDelete: order });
const updateOrder = (order) => ({ type: UPDATE_ORDER, orderToUpdate: order });

/* ------------       DISPATCHERS     ------------------ */
export const fetchOrders = () => dispatch => {
  axios.get('/api/orders')
    .then(res => dispatch(getOrders(res.data)))
    .catch(err => console.error('Fetching orders unsuccessful', err))
}

export const fetchOrder = (id) => dispatch => {
  axios.get(`/api/order/${id}`)
    .then(res => dispatch(getOrder(res.data)))
    .catch(err => console.error('Fetching order unsuccessful', err))
}

export const addOrder = order => dispatch => {
  axios.post('/api/orders', order)
    .then(res => dispatch(createOrder(res.data)))
    .catch(err => console.error(`Creating order: ${order} unsuccessful`, err))
}

export const changeOrder = (id, order) => dispatch => {
  axios.put(`/api/orders/${id}`, order)
    .then(res => dispatch(updateOrder(res.data)))
    .catch(err => console.error(`Updating order: ${order} unsuccessful`, err))
}

export const removeOrder = id => dispatch => {
  axios.delete(`/api/stories/${id}`)
    .then(res => dispatch(deleteOrder(res.data)))
    .catch(err => console.error(`Removing order: ${id} unsuccessful`, err));
}
