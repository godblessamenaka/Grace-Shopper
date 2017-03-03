import { GET_REVIEWS, CREATE_REVIEW, DELETE_REVIEW} from '../actions/reviews'

const initialState = []

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return action.receivedReviews
    case CREATE_REVIEW:
      return [action.reviewToCreate, ...state]
    case DELETE_REVIEW:
      return state.filter(review => review.id !== action.reviewToDelete.id)
    default:
      return state
  }
}

export default reviewReducer;

