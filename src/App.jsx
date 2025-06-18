import React, {useState} from "react"
import OrderForm from "./Components/OrderForm";
import OrderList from "./Components/OrderList";

function App() {

    const [orders, setOrders] = useState([]);

    const handleAddOrders = (order) => {
      setOrders(o => [...o, order]);
    }

    const handleNextStatus = (id) => {
      setOrders(prevOrders => prevOrders.map(order => {
        if (order.id === id) {
          const statuses = ["Pending", "Preparing", "Out for Delivery", "Deliverd"];
          const currentIndex = statuses.indexOf(order.status);
          const nextStatus = statuses[Math.min(currentIndex+1, statuses.length - 1)];
          return { ...order, status: nextStatus};
        }
        return order;
      }));
    };

    const handleCancelOrder = (id) => {
      setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    }

    console.log(orders);
  
    return (
      <>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Food order Tracker</h1>
          <div className="max-w-md mx-auto">
            <OrderForm onAddOrder={handleAddOrders}/>
            <OrderList orders={orders} onNextStatus={handleNextStatus} onCancel={handleCancelOrder}/>
          </div>
        </div>
      </>
    )
}

export default App
