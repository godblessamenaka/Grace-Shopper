import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

/* ------------   ACTION CREATORS     ------------------ */
const getUsers = (users) => ({ type: GET_USERS, receivedUsers: users});
const getUser = (user) => ({ type: GET_USERS, receivedUser: user});
const createUser = (user) => ({ type: CREATE_USER, userToCreate: user});
const deleteUser = (user) => ({ type: DELETE_USER, userToDelete: user});
const updateUser = (user) => ({ type: UPDATE_USER, userToUpdate: user});

// // Auth Users --SEE ../reducers/AUTH.jsx
// export const GET_USER = 'GET_USER';
// export const SET_USER = 'SET_USER';

// export const getUser = (user) => ({ type: GET_USER, receivedUser: user});
// export const setUser = (user) => ({ type: SET_USER, userToSet: user});

/* ------------       DISPATCHERS     ------------------ */
export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => dispatch(getUsers(res.data)))
    .catch(err => console.error('Fetching users unsuccessful', err))
}

export const fetchUser = (id) => dispatch => {
  axios.get(`/api/user/${id}`)
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.error('Fetching user unsuccessful', err))
}

export const addUser = user => dispatch => {
  axios.post('/api/users', user)
    .then(res => dispatch(createUser(res.data)))
    .catch(err => console.error(`Creating user: ${user} unsuccessful`, err))
}

export const removeUser = id => dispatch => {
  axios.delete(`/api/stories/${id}`)
    .then(res => dispatch(deleteUser(res.data)))
    .catch(err => console.error(`Removing user: ${id} unsuccessful`, err));
}

export const changeUser = (id, user) => dispatch => {
  axios.put(`/api/users/${id}`, user)
    .then(res => dispatch(updateUser(res.data)))
    .catch(err => console.error(`Updating user: ${user} unsuccessful`, err))
}
