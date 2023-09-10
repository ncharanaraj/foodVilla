import React, { useState } from "react";
import foodVillaLogo from "../assets/img/FoodVilla.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <img src={foodVillaLogo} alt="logo" />
    </div>
  );
};

const NavLinks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </nav>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Header;
