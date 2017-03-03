import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const GET_REVIEWS = 'GET_REVIEWS';
export const CREATE_REVIEWS = 'CREATE_REVIEWS';
export const DELETE_REVIEWS = 'DELETE_REVIEWS';

/* ------------   ACTION CREATORS     ------------------ */
const getReviews = (reviews) => ({ type: GET_REVIEWS, receivedReviews: reviews});
const createReview = (reviews) => ({ type: CREATE_REVIEWS, reviewsToCreate: reviews});
const deleteReview = (reviews) => ({ type: DELETE_REVIEWS, reviewsToDelete: reviews});

/* ------------       DISPATCHERS     ------------------ */
export const fetchReviews = () => dispatch => {
        axios.get('/api/reviews')
        .then(res => dispatch(getReviews(res.data)))
        .catch(err => console.error('Fetching reviews unsuccessful', err))
}

export const addReview = reviews => dispatch => {
    axios.post('/api/reviewss', reviews)
        .then(res => dispatch(createReview(res.data)))
        .catch(err => console.error(`Creating reviews: ${reviews} unsuccessful`, err))
}

export const removeReview = id => dispatch => {
  dispatch(deleteReview(id));
  axios.delete(`/api/stories/${id}`)
       .catch(err => console.error(`Removing review: ${id} unsuccessful`, err));
}
