import React, { useState } from "react";
import "./App.css";
import { IMAGE_URL, restaurantsList } from "./constants";
import Header from "./components/Header";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines }) => {
  return (
    <div className="restaurant-card">
      <img src={`${IMAGE_URL}${cloudinaryImageId}`} alt={name} />
      <p>{name}</p>
      <span className="restaurant-card-badge">{cuisines.join(", ")}</span>
    </div>
  );
};

const App = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);
  const [search, setSearch] = useState("");

  const searchHandler = (searchText, searchRestaurants) => {
    return searchText.length === 0
      ? restaurantsList
      : searchRestaurants.filter((restaurant) => {
          return restaurant.info.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase());
        });
  };

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <div className="restaurant-search">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setRestaurants(searchHandler(search, restaurants));
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurant-cards">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default App;
