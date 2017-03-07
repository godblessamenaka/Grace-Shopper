import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';

export default class OrdersPage extends React.Component {

  state = {
    open: false,
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    const orders = this.props.currentUsersOrders
    return (
      <div>
        <br />
          <List>
            <Subheader>Order History</Subheader>
            {orders && orders.map((order) => {
            return (<ListItem
            key={order.id}
            primaryText={Date(order.date)}
            secondaryText={'Status: ' + order.status}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
                nestedItems={order.orderLines && order.orderLines.map((orderLine) => {
                return (<ListItem
                key={orderLine.id}
                hoverColor="#891548"
                  primaryText={orderLine.product.name}
                  secondaryText={'Qty: ' + orderLine.quantity + ' Price: $' + orderLine.totalPrice}
                  containerElement={<Link to={`/products/${orderLine.product_id}`} />}
                />)
              })}
            />)})}
          </List>
      </div>
    );
  }
}
