export const GET_CART = 'GET_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const getCart = (cart) => ({ type: GET_CART, receivedCart: cart});
export const updateCart = (payload) => ({ type: UPDATE_CART, payload: payload});
