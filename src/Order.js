import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";
function Order(props) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      <span>Pizzas: {orders}</span>
      <RestaurantButton addOrder={orderOne} />;
    </li>
  );
}
export default Order;
