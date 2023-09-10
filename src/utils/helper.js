export const searchHandler = (searchText, searchRestaurants) => {
  return searchText.length === 0
    ? searchRestaurants
    : searchRestaurants.filter((restaurant) => {
        return restaurant?.info?.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase());
      });
};
