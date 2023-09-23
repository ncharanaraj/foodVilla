import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemCard from "./ItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-screen-lg m-4 mx-auto">
      {cartItems.length === 0 ? (
        <p className="text-center">
          Your cart is empty. You can go to home page to view more restaurants
        </p>
      ) : (
        <>
          <div className="flex justify-between">
            <p className="font-bold">Cart - {cartItems.length}</p>
            <button
              className=" p-2 bg-green-200 rounded-md"
              onClick={() => handleClearCart()}
            >
              CLEAR CART
            </button>
          </div>
          <div className="flex gap-4">
            <div className="w-3/4">
              {cartItems.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
            <div className="w-1/4">
              <p className="font-bold py-2">
                Total: ₹{cartItems.reduce((a, item) => a + item.price / 100, 0)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
