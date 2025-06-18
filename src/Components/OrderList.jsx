import React from 'react'
import OrderItem from './OrderItem';

const OrderList = ({ orders, onNextStatus, onCancel }) => {

    if(orders.length === 0){
        return <p>No orders yet.</p>;
    }

    return (
        <div>
            {orders.map(order => (
                <OrderItem key={order.id} order={order} onNextStatus={onNextStatus} onCancel={onCancel}/>
            ))}
        </div>
    )
}

export default OrderList