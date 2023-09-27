import useOnline from "../utils/useOnline";
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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are offline. Please check your connection</h1>;
  }

  if (!allRestaurants) return null;

  return (
    <>
      <div className=" p-4 flex justify-center">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-5 p-2 rounded-s-full border focus:outline-none w-96 "
          placeholder="Search"
          data-testid="search-text"
        />
        <button
          onClick={handleSearch}
          className="bg-green-200 px-3 rounded-e-full font-semibold "
          data-testid="search-btn"
        >
          Search
        </button>
      </div>
      {!allRestaurants.length ? (
        <Loader />
      ) : (
        <div className="mx-auto max-w-screen-lg">
          {!filteredRestaurants.length ? (
            <h2 className="text-xl font-bold my-3 text-center">
              No restaurants available for your search
            </h2>
          ) : (
            <>
              <h2 className="text-xl font-bold my-3">
                Restaurants with online food delivery
              </h2>
            </>
          )}

          <div
            className="flex flex-wrap justify-between gap-y-2"
            data-testid="filtered-ResList"
          >
            {filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={`/restaurant/${restaurant.info.id}`}
                  key={restaurant.info.id}
                >
                  <RestaurantCard {...restaurant.info} />
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
