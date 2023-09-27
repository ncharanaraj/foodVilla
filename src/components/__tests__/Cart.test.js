import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Cart from "../Cart";
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";
// import { RESTAURANT_MENU } from "../../mocks/mockData";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(RESTAURANT_MENU);
//     },
//   });
// });

test("Cart is empty", () => {
  const cart = render(
    <StaticRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </StaticRouter>
  );

  const cartStatus = cart.getByTestId("empty-cart");
  expect(cartStatus.innerHTML).toBe(
    "Your cart is empty. You can go to home page to view more restaurants"
  );
});

// test("Add item to the cart", () => {
//   const cart = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Cart />
//       </Provider>
//     </StaticRouter>
//   );

//   const addToCart = cart.getAllByTestId("add-item");
//   fireEvent.click(addToCart[0]);
// });
