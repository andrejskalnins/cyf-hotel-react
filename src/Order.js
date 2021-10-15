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
      <span>
        {props.orderType}: {orders}
      </span>
      <RestaurantButton addOrder={orderOne} />;
    </li>
  );
}
export default Order;
