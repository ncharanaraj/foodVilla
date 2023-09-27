import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { RESTAURANT_MENU } from "../../mocks/mockData";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});

test("Add items to cart", async () => {
  const resMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  const menuShimmer = resMenu.getByTestId("menuShimmer");
  expect(menuShimmer).toBeInTheDocument();

  await waitFor(() => expect(resMenu.getAllByTestId("res-info")));

  const addItem = resMenu.getAllByTestId("add-item");
  fireEvent.click(addItem[0]);
  fireEvent.click(addItem[1]);

  const cartItems = resMenu.getByTestId("cart-length");
  expect(cartItems.innerHTML).toBe("Cart [2]");
});
