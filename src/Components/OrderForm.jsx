import React, {useState} from 'react'

const OrderForm = ({onAddOrder}) => {

    const [food, setFood] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [customer, setCustomer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!food.trim() || !customer.trim()) return;

        const newOrder = {
            id: new Date(),
            food,
            quantity,
            customer,
            status: 'Pending'
        };

        onAddOrder(newOrder);

        setFood('');
        setQuantity(1);
        setCustomer('');
    }

    return (
        <form action="" className='space-y-4 mb-6' onSubmit={handleSubmit}>
            <input type="text" value={food} placeholder='Food Name' onChange={(e) => setFood(e.target.value)} className='w-full p-2 border border-gray-300 rounded'/> <br />
            <input type="number" value={quantity} min='1' onChange={(e) => setQuantity(Number(e.target.value))} className='w-full p-2 border border-gray-300 rounded'/> <br />
            <input type="text" value={customer} placeholder='Customer Name' onChange={(e) => setCustomer(e.target.value)} className='w-full p-2 border border-gray-300 rounded'/> <br />
            <button type='submit' className='w-full bg-green-500 text-white p-2 rounded hover:bg-green-600'>Add Order</button> <br />
        </form>
    )
}

export default OrderForm