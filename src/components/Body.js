import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Loader from "./loader";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (searchText, searchRestaurants) => {
    return searchText.length === 0
      ? allRestaurants
      : searchRestaurants.filter((restaurant) => {
          return restaurant?.info?.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase());
        });
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const response = await fetch(`${API_URL}`);
    const restaurants = await response.json();
    setAllRestaurants(
      restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurants(
      restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return (
    <>
      <div className="restaurant-search">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setfilteredRestaurants(searchHandler(search, allRestaurants));
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <Loader />
      ) : (
        <>
          {!filteredRestaurants.length
            ? "No restaurants available for your search"
            : null}
          <div className="restaurant-cards">
            {filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={`/restaurant/${restaurant?.info?.id}`}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
