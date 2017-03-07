import OrdersPage from '../components/OrdersPage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUsersOrders: state.orders.currentUsersOrders,
    allProducts: state.products.allProducts
  }
}

export default connect(mapStateToProps)(OrdersPage);
