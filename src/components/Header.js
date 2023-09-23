import React, { useContext, useState } from "react";
import foodVillaLogo from "../assets/img/FoodVilla.png";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Logo = () => {
  return (
    <div className="w-16">
      <img src={foodVillaLogo} alt="logo" className="w-full" />
    </div>
  );
};

const NavLinks = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <>
      <nav>
        <ul className="flex gap-8">
          <Link to="/">
            <li className="p-2 font-semibold rounded hover:bg-slate-100">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="p-2 font-semibold rounded hover:bg-slate-100">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="p-2 font-semibold rounded hover:bg-slate-100">
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li className="p-2 font-semibold rounded">
              Cart [{cartItems.length}]
            </li>
          </Link>
        </ul>
      </nav>
      <div>
        <>
          <span className="mr-2">{isOnline ? "✅" : "🔴"}</span>
          {isLoggedIn ? (
            <>
              <span className="font-bold text-slate-500">{user.email}</span>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate("/");
                }}
                className="p-2 font-semibold rounded bg-slate-200 hover:bg-red-100 ml-2"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                // setIsLoggedIn(true);
                navigate("/login");
              }}
              className="p-2 font-semibold rounded bg-slate-200 hover:bg-slate-100"
            >
              Login
            </button>
          )}
        </>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="bg-green-200 p-2">
      <div className="flex justify-between items-center max-w-screen-lg m-auto">
        <Logo />
        <NavLinks />
      </div>
    </div>
  );
};

export default Header;
