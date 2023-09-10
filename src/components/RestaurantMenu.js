import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants";
import Loader from "./loader";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  let { menuId } = useParams();

  const restaurantMenu = useRestaurantMenu(menuId);

  const restaurantProfile = restaurantMenu[0]?.card?.card?.info;

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
              <li key={restaurant?.card?.info?.id}>
                {restaurant?.card?.info?.name}
              </li>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
