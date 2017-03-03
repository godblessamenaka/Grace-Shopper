import { GET_CATEGORIES, GET_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY} from '../actions/categories'

//WE NEED TO WORK ON THIS, IN THE COMBINE REDUCER, THIS REDUCER CAN ONLY POINT AT 1 THING ON THE STATE, BUT WE HAVE ALL CATEGORIES AND SELECTED CATEGORY

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.receivedCategories

    case GET_CATEGORY:
      return action.receivedCategory

    case CREATE_CATEGORY:
      return action.categoryToCreate

    case DELETE_CATEGORY:
      return action.categoryToUpdate

    default:
      return state
  }
}

export default categoryReducer;
