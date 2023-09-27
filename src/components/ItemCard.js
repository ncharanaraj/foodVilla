import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemCard = (cardItem) => {
  const { id, name, price, defaultPrice, description, imageId } = cardItem;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="flex justify-between border my-2 p-2 rounded-md shadow-md gap-2">
      <div className="w-4/5">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm">₹{price / 100 || defaultPrice / 100}</p>
        <small>{description}</small>
      </div>
      <div className="w-1/5 ">
        <img
          className="w-full rounded-t-md h-24 object-cover"
          src={`${IMAGE_URL}${imageId}`}
          alt={name}
        />

        {cartItems.find((cartItem) => cartItem.id === id) ? (
          <button
            className="p-2 bg-red-300 font-bold w-full rounded-b-md shadow-md"
            onClick={() => handleRemoveItem(id)}
          >
            REMOVE
          </button>
        ) : (
          <button
            className="p-2 bg-green-300 font-bold w-full rounded-b-md shadow-md"
            onClick={() => handleAddItem(cardItem)}
            data-testid="add-item"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

{
  /* <div className="flex items-center justify-between bg-green-300 rounded-b-md shadow-md ">
            <button className="p-2 px-4" onClick={() => handleRemoveItem(id)}>
              -
            </button>
            <span className="font-bold">{cartItems.length}</span>
            <button
              className="p-2 px-4"
              onClick={() => handleAddItem(cardItem)}
            >
              +
            </button>
          </div> */
}

export default ItemCard;
