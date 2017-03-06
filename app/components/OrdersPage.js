import React from 'react';


export default function OrdersPage(props) {

    const orders = props.currentUsersOrders
    return <div>
        {orders && orders.map((order) => {
            return (<div key={order.id}>
                <p>{order.date}</p>
                <p>{order.status}</p>
                {order.orderLines && order.orderLines.map((orderLine) => {
                    return (<div key={orderLine.id}>
                        <p>{orderLine.price} X {orderLine.quantity} = {orderLine.totalPrice}</p>
                    </div>)
                })}
            </div>)
        })}
    </div>
}

