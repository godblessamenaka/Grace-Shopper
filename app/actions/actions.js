//ACTION TYPES & ACTION CREATORS

// Users
export const GET_USERS = 'GET_USERS';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const getUsers = (users) => ({ type: GET_USERS, receivedUsers: users});
export const createUser = (user) => ({ type: CREATE_USER, userToCreate: user});
export const deleteUser = (user) => ({ type: DELETE_USER, userToDelete: user});
export const updateUser = (user) => ({ type: UPDATE_USER, userToUpdate: user});

// Reviews
export const GET_REVIEWS = 'GET_REVIEWS';
export const CREATE_REVIEWS = 'CREATE_REVIEWS';
export const DELETE_REVIEWS = 'DELETE_REVIEWS';

export const getReviews = (reviews) => ({ type: GET_REVIEWS, receivedReviews: reviews});
export const createReviews = (reviews) => ({ type: CREATE_REVIEWS, reviewsToCreate: reviews});
export const deleteReviews = (reviews) => ({ type: DELETE_REVIEWS, reviewsToDelete: reviews});

// Orders
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

// Categories
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const getCategories = (categories) => ({ type: GET_CATEGORIES, receivedCategories: categories});
export const getCategory = (category) => ({ type: GET_CATEGORY, receivedCategory: category});
export const createCategory = (category) => ({ type: CREATE_CATEGORY, categoryToCreate: category});
export const deleteCategory = (category) => ({ type: DELETE_CATEGORY, categoryToDelete: category});

// Auth Users
export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const getUser = (user) => ({ type: GET_USER, receivedUser: user});
export const setUser = (user) => ({ type: SET_USER, userToSet: user});

// Cart
export const GET_CART = 'GET_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const getCart = (cart) => ({ type: GET_CART, receivedCart: cart});
export const updateCart = (cart) => ({ type: UPDATE_CART, cartToUpdate: cart});
