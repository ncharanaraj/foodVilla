import React from "react";
import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-60 h-full rounded">
      <img
        src={`${IMAGE_URL}${cloudinaryImageId}`}
        alt={name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <div className="m-2">
        <p className="font-medium text-lg overflow-ellipsis">{name}</p>
        <div className="flex gap-1">
          <p className="bg-green-700 rounded-full px-1 font-semibold text-white">
            ☆
          </p>
          <p>{avgRating}</p>
        </div>
        <p className="italic mt-2 text-sm text-gray-500 overflow-ellipsis">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
