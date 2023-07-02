import React, { useState, Fragment } from "react";
import AddOrderItem from "./Components/Orders/AddOrderItem";
import OrdersList from "./Components/Orders/Orderslist";

function App() {
  const [orders, setOrders] = useState([]);

  const addOrderHandler = (dishName, dishPrice, tableNumber) => {
    const newOrder = {
      id: Math.random().toString(),
      dishName: dishName,
      dishPrice: dishPrice,
      tableNumber: tableNumber,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const deleteOrderHandler = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Restaurant App</h1>

        <AddOrderItem onAddOrderItem={addOrderHandler} />

        <h2>Orders:</h2>
        {orders.length > 0 ? (
          <OrdersList orders={orders} onDelete={deleteOrderHandler} />
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    </Fragment>
  );
}

export default App;
