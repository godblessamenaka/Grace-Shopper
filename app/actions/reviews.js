export const GET_REVIEWS = 'GET_REVIEWS';
export const CREATE_REVIEWS = 'CREATE_REVIEWS';
export const DELETE_REVIEWS = 'DELETE_REVIEWS';

export const getReviews = (reviews) => ({ type: GET_REVIEWS, receivedReviews: reviews});
export const createReviews = (reviews) => ({ type: CREATE_REVIEWS, reviewsToCreate: reviews});
export const deleteReviews = (reviews) => ({ type: DELETE_REVIEWS, reviewsToDelete: reviews});
