import axios from 'axios';
// Categories
export const GET_REVIEWS = 'GET_REVIEWS';
export const CREATE_REVIEWS = 'CREATE_REVIEWS';
export const DELETE_REVIEWS = 'DELETE_REVIEWS';

export const getReviews = (reviews) => ({ type: GET_REVIEWS, receivedReviews: reviews});
export const createReviews = (reviews) => ({ type: CREATE_REVIEWS, reviewsToCreate: reviews});
export const deleteReviews = (reviews) => ({ type: DELETE_REVIEWS, reviewsToDelete: reviews});


//thunk action creators
export const fetchReviews = () => {
    return (dispatch) => {
        axios.get('/api/reviews')
        .then((res) => {
       	  dispatch(getReviews(res.data));
       	})
        .catch(function (err) {
            console.error(err);
        });
    };
};

