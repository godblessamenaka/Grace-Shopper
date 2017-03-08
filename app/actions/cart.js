export const GET_CART = 'GET_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export const getCart = cart => ({ type: GET_CART, receivedCart: cart});
export const updateCart = item => ({ type: UPDATE_CART_ITEM, item: item});



export const loadCart = dispatch => {
  const user = localStorage.getItem('user')
  let cart = user ? localStorage.getItem('cart' + user) : localStorage.getItem('cart0')
  cart = JSON.parse(cart)
  dispatch(getCart(cart))
}

export const addItemToCart = item => dispatch => {
  const newItem = item
  //get correct users cart
  const user = localStorage.getItem('user')
  let workingCart =  user ? localStorage.getItem('cart' + user) : localStorage.getItem('cart0')
  workingCart = JSON.parse(workingCart)

  //if cart was empty
  if (!workingCart){
    workingCart = [];
    workingCart.push(newItem);
  }
  else {
    //check if cart already has line for item
    const oldIndex = workingCart.findIndex(cartItem => cartItem.id === newItem.id);

    //add item to cart combine with old line
    if (oldIndex !== -1){
      newItem.quantity += workingCart[oldIndex].quantity
      workingCart[oldIndex] = newItem
    }
    else {
      workingCart.push(newItem)
    }
  }

  localStorage.setItem(user ? 'cart' + user : 'cart0', JSON.stringify(workingCart));
  dispatch(getCart(workingCart));
}

export const removeItemFromCart = item => dispatch => {

  const newItem = item
  //get correct users cart
  const user = localStorage.getItem('user')
  let workingCart =  user ? localStorage.getItem('cart' + user) : localStorage.getItem('cart0')
  workingCart = JSON.parse(workingCart)

  workingCart = workingCart.filter(cartItem => cartItem.id !== newItem.id)

  localStorage.setItem(user ? 'cart' + user : 'cart0', JSON.stringify(workingCart))
  dispatch(getCart(workingCart))
}


//const working cart
//if no id, cart0, if id
//
