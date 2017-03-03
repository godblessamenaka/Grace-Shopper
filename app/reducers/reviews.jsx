import { GET_REVIEWS, CREATE_REVIEW, DELETE_REVIEW} from '../actions/reviews'

const initialState = {
  allReviews: [],
}

const reviewReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_REVIEWS:
      newState.allReviews = action.receivedReviews
      break;
    case CREATE_REVIEW:
      newState.Reviews = [action.reviewToCreate, ...newState.Reviews]
      break;
    case DELETE_REVIEW:
      newState.allReviews = newState.allReviews.filter(review => review.id !== action.reviewToDelete.id)
      break;

    default:
      return state
  }
}

export default reviewReducer;

