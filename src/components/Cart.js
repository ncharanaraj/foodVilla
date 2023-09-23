import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return <div>Cart - {cartItems.length}</div>;
};

export default Cart;
