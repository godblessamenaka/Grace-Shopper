import React, {Component} from 'react';
import Promise from 'bluebird';
import axios from 'axios';

export default class OrdersPage extends Component {
constructor(){
  super()
}

render(){
    var orderLines = [];
    Promise.map(this.props.currentUsersOrders, (order) => {
        axios.get(`/api/orderlines/${order.id}`)
        .then((line) => orderLines.push(line.data))
    })
    console.log(orderLines)


    return <div><p>Hi</p></div>
    }
}

