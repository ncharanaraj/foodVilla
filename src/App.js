import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const App = () => {
  const [user, setUser] = useState({
    name: "Charan",
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ user: user, setUser, isLoggedIn, setIsLoggedIn }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:menuId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
