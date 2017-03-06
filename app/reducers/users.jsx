import { GET_USERS, GET_USER, CREATE_USER, DELETE_USER, UPDATE_USER} from '../actions/users'

const initialState = {
  allUsers: [],
  selectedUser: {}
}

const userReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_USERS:
      newState.allUsers = action.receivedUsers
      break

    case GET_USER:
      newState.selectedUser = action.receivedUser
      break

    case CREATE_USER:
      newState.allUsers = [action.userToCreate, ...newState.allUsers]
      break

    case DELETE_USER:
      newState.allUsers = newState.allUsers.filter(user => user.id !== action.userToDelete.id)
      break

    case UPDATE_USER:
      newState.selectedUser = newState.allUsers.map(user => (
        action.user.id === user.id ? action.userToUpdate : user
      ))
      break

    default:
      return state
  }
  return newState
}

export default userReducer;
