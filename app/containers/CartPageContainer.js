import CartPage from '../components/CartPage'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {productsInCart: state.cart};
}

const CartPageContainer = connect(
  mapStateToProps
)(CartPage)

export default CartPageContainer
