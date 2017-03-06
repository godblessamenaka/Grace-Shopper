import React, {Component} from 'react';
import Promise from 'bluebird';
import axios from 'axios';

export default class OrdersPage extends Component {
constructor(props){
  super(props)
  this.orderLines = [];
}

componentDidUpdate(){

    Promise.map(this.props.currentUsersOrders, (order) => {
        axios.get(`/api/orderlines/${order.id}`)
        .then((lines) => {this.orderLines.push(lines.data)})
    })

}

render(){

    console.log('ol:', this.orderLines)
    return <div><p>Hi</p></div>
    }
}

