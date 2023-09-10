import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { searchHandler } from "./helper";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const response = await fetch(`${API_URL}`);
    const restaurants = await response.json();
    const allRestaurantsData =
      restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(allRestaurantsData);
    setfilteredRestaurants(allRestaurantsData);
  }

  const handleSearch = () => {
    const searchRestaurant = searchHandler(search, allRestaurants);
    setfilteredRestaurants(searchRestaurant);
  };

  return {
    allRestaurants,
    filteredRestaurants,
    handleSearch,
    search,
    setSearch,
  };
};

export default useRestaurants;
