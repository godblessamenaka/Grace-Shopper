import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */
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

/* ------------   ACTION CREATORS     ------------------ */
const getReviews = (reviews) => ({ type: GET_REVIEWS, receivedReviews: reviews })
const createReview = (reviews) => ({ type: CREATE_REVIEWS, reviewsToCreate: reviews })
const deleteReview = (reviews) => ({ type: DELETE_REVIEWS, reviewsToDelete: reviews })

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
  axios.delete(`/api/stories/${id}`)
    .then(res => dispatch(deleteReview(res.data)))
    .catch(err => console.error(`Removing review: ${id} unsuccessful`, err));
}
