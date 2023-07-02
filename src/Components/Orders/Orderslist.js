import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./OrdersList.module.css";

const OrdersList = (props) => {
  if (!props.orders || !Array.isArray(props.orders)) {
    return <p>No orders available.</p>;
  }

  return (
    <Card className={classes.orders}>
      <ul>
        {props.orders.map((order) => (
          <li key={order.id} className={classes.order}>
            <h3>{order.tableNumber}</h3>
            <p>
              {order.dishName} - Rs. {order.dishPrice}
              <Button onClick={() => props.onDelete(order.id)}>Delete</Button>
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OrdersList;
