import React from 'react'

const OrderItem = ({ order, onNextStatus, onCancel}) => {

    const { id, food, quantity, customer, status } = order;
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <p className='text-lg font-semibold'>{food} x{quantity}</p>
            <p className='text-sm text-gray-600'>Customer: {customer}</p>
            <p className='text-sm text-blue-600 mb-2'>Status: {status}</p>
            <div className='space-x-2'>
                <button onClick={() => onNextStatus(id)} className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>Next Status</button>
                <button onClick={() => onCancel(id)} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>Cancel order</button>
            </div>
        </div>
    )
}

export default OrderItem