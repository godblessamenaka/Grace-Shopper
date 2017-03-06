import OrdersPage from '../components/OrdersPage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUsersOrders: state.orders.currentUsersOrders
  }
}

export default connect(mapStateToProps)(OrdersPage);
