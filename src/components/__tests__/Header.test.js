import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // First load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // loading logo
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/mockLogo.png");
});

test("On the render of header cart length should be 0", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart-length");
  expect(cart.innerHTML).toBe("Cart [0]");
});

test("online status on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const status = header.getByTestId("online-status");
  expect(status.innerHTML).toBe("✅");
});
