import OrdersPage from '../components/OrdersPage';
import { connect } from 'react-redux';
import {fetchOrdersByUser} from '../actions/orders'

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.selectedUser,
    currentUsersOrders: state.orders.currentUsersOrders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrdersByUser: function(id){
      dispatch(fetchOrdersByUser(id))
    },
    getCategory: function(category){
      dispatch(getCategory(category));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
