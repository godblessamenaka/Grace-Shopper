// import React from 'react';


// export default function OrdersPage(props) {

//     const orders = props.currentUsersOrders
//     return <div>
//         {orders && orders.map((order) => {
//             return (<div key={order.id}>
//                 <p>{order.date}</p>
//                 <p>{order.status}</p>
//                 {order.orderLines && order.orderLines.map((orderLine) => {
//                     return (<div key={orderLine.id}>
//                         <p>{orderLine.price} X {orderLine.quantity} = {orderLine.totalPrice}</p>
//                     </div>)
//                 })}
//             </div>)
//         })}
//     </div>
// }

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default class OrdersPage extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  findProductById = (id) => {
    this.props.allProducts.forEach((product) => {
        if (product.id === id){
            return product.name;
        }
    });
  }

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
                const product = this.findProductById(orderLine.id);
                console.log(product)
                return (<ListItem
                  key={orderLine.id}
                  primaryText='hi'
                />)
              })}
            />)})}
          </List>
      </div>
    );
  }
}
