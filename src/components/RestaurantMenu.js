import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants";
import Loader from "./loader";

const RestaurantMenu = () => {
  let { menuId } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const restaurantProfile = restaurantMenu[0]?.card?.card?.info;

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${menuId}`
    );

    const menu = await response.json();

    setRestaurantMenu(menu?.data?.cards);
  }
  return restaurantMenu.length === 0 ? (
    <Loader />
  ) : (
    <>
      <h1>Menu {menuId}</h1>

      <div className="restaurant-menu">
        <div>
          <h2>{restaurantProfile?.name}</h2>
          <img
            className="restaurant-img"
            src={`${IMAGE_URL}/${restaurantProfile?.cloudinaryImageId}`}
            alt={restaurantProfile?.name}
          />
        </div>
        <div>
          {restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (restaurant) => (
              <li key={restaurant.card.info.id}>{restaurant.card.info.name}</li>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
