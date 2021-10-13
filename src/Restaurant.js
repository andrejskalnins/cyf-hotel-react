import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>Pizzas: {orders} </li>
      </ul>
      <RestaurantButton addOrder={orderOne} />
    </div>
  );
};

export default Restaurant;
