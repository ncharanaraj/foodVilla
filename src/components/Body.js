import useRestaurants from "../utils/useRestaurants";
import RestaurantCard from "./RestaurantCard";
import Loader from "./loader";
import { Link } from "react-router-dom";

const Body = () => {
  const {
    allRestaurants,
    filteredRestaurants,
    handleSearch,
    search,
    setSearch,
  } = useRestaurants();

  if (!allRestaurants) return null;

  return (
    <>
      <div className="restaurant-search">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {!allRestaurants?.length ? (
        <Loader />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
};

export default Body;
