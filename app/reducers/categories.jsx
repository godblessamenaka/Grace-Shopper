import { GET_CATEGORIES, GET_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY} from '../actions/categories'

const initialState = {
  allCategories: [],
  selectedCategory: {}
}
const categoryReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_CATEGORIES:
      newState.allCategories = action.receivedCategories
      break;

    case GET_CATEGORY:
      newState.selectedCategory = action.receivedCategory
      break;

    case CREATE_CATEGORY:
      newState.allCategories = [action.categoryToCreate, ...newState.allCategories]
      break;

    case DELETE_CATEGORY:
      newState.allCategories = newState.allCategories.filter(category => category.id !== action.categoryToDelete.id)
      break;

    default:
      return state
  }
  return newState;
}

export default categoryReducer;
