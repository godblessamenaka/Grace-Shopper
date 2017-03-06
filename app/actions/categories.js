import axios from 'axios';
// Categories
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const getCategories = (categories) => ({ type: GET_CATEGORIES, receivedCategories: categories});
export const getCategory = (category) => ({ type: GET_CATEGORY, receivedCategory: category});
//add to existing category array on state
export const createCategory = (category) => ({ type: CREATE_CATEGORY, categoryToCreate: category});
//i think this should just delete the category from the db and reload categories
export const deleteCategory = (category) => ({ type: DELETE_CATEGORY, categoryToDelete: category});

//thunk action creators
export const fetchCategories = () => {
    return (dispatch) => {
        axios.get('/api/categories')
        .then((res) => res.data)
        .then((categories) => {
            dispatch(getCategories(categories));
        })
        .catch(function (err) {
            console.error(err);
        });
    };
};

export const fetchCategory = (catId) => {
    return (dispatch) => {
        axios.get(`/api/categories/${catId}`)
        .then(res => dispatch(getCategory(res.data)))
        .catch(function (err) {
            console.error(err);
        });
    }
}
