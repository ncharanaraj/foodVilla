import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../constants";

const useRestaurantMenu = (menuId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const response = await fetch(`${RESTAURANT_MENU_URL}${menuId}`);
    const menu = await response.json();
    setRestaurantMenu(menu?.data?.cards);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
