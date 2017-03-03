import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

/* ------------   ACTION CREATORS     ------------------ */
const getProducts = (products) => ({ type: GET_PRODUCTS, receivedProducts: products});
const getProduct = (product) => ({ type: GET_PRODUCT, receivedProduct: product});
const createProduct = (product) => ({ type: CREATE_PRODUCT, productToCreate: product});
const changeProduct = (product) => ({ type: UPDATE_PRODUCT, productToUpdate: product});

/* ------------       DISPATCHERS     ------------------ */
export const fetchProducts = () => dispatch => {
        axios.get('/api/products')
        .then(res => dispatch(getProducts(res.data)))
        .catch(err => console.error('Fetching products unsuccessful', err))
}

export const fetchProduct = (id) => dispatch => {
    axios.get(`/api/products/${id}`)
        .then(res => dispatch(getProduct(res.data)))
        .catch(err => console.error('Fetching product unsuccessful', err))
}

export const addProduct = product => dispatch => {
    axios.post('/api/products', product)
        .then(res => dispatch(createProduct(res.data)))
        .catch(err => console.error(`Creating product: ${product} unsuccessful`, err))
}

export const updateProduct = (id, product) => dispatch => {
    axios.put(`/api/products/${id}`, product)
        .then(res => dispatch(changeProduct(res.data)))
        .catch(err => console.error(`Updating product: ${product} unsuccessful`, err))
}
