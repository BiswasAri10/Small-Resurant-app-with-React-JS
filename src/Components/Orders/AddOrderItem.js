import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddOrderItem.module.css";

const AddOrderItem = (props) => {
  const dishNameInputRef = useRef();
  const dishPriceInputRef = useRef();
  const tableNumberInputRef = useRef();
  const [error, setError] = useState(null);

  const addOrderItemHandler = (event) => {
    event.preventDefault();
    const enteredDishName = dishNameInputRef.current.value;
    const enteredDishPrice = dishPriceInputRef.current.value;
    const enteredTableNumber = tableNumberInputRef.current.value;

    if (
      enteredDishName.trim().length === 0 ||
      enteredDishPrice.trim().length === 0 ||
      enteredTableNumber.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter valid values for Dish name, Dish price, and Table number.",
      });
      return;
    }

    const dishPrice = +enteredDishPrice;

    if (isNaN(dishPrice) || dishPrice <= 0) {
      setError({
        title: "Invalid price",
        message: "Please enter a valid price (> 0).",
      });
      return;
    }

    props.onAddOrderItem(enteredDishName, dishPrice, enteredTableNumber);
    dishNameInputRef.current.value = "";
    dishPriceInputRef.current.value = "";
    tableNumberInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addOrderItemHandler}>
          <label htmlFor="dishName">Dish Name</label>
          <input id="dishName" type="text" ref={dishNameInputRef} />
          <label htmlFor="dishPrice">Dish Price</label>
          <input
            id="dishPrice"
            type="number"
            step="0.01"
            ref={dishPriceInputRef}
          />
          <label htmlFor="tableNumber">Table Number</label>
          <select id="tableNumber" ref={tableNumberInputRef}>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
          <Button type="submit">Add Order Item</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddOrderItem;
