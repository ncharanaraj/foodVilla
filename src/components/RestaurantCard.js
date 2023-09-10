import React from "react";
import { IMAGE_URL } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines }) => {
  return (
    <div className="restaurant-card">
      <img src={`${IMAGE_URL}${cloudinaryImageId}`} alt={name} />
      <p>{name}</p>
      <span className="restaurant-card-badge">{cuisines.join(", ")}</span>
    </div>
  );
};

export default RestaurantCard;
