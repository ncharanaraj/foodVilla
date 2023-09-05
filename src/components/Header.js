import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src="https://shorturl.at/ACPR3" alt="logo" />
    </div>
  );
};

const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <>
      <Logo />
      <NavLinks />
    </>
  );
};

export default Header;
