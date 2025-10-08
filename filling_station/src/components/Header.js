import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";

import Logo from '../assets/images/ICON.png';


const Header = () => {
  return (
    <header className="header">
    <div className="spacing">
      <div className="logo-navbar">
        <img src={Logo} alt="Filling Station" />
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Sips & Snacks</a>
        <a href="/cart">Crates</a>
        <a href="/about">About</a>
      </nav>
      </div>

      <div className="actions">
        <a className="cart" href="/cart">
          <FaShoppingCart />
          <span>0</span></a>
        <a href="/profile"><FaUser className="user-icon" /></a>
      </div>
    </header>
  );
};

export default Header;
