import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">SentientMarket</a>
        <input type="text" placeholder="Search items, collections..." className="search-bar" />
      </div>
      <div className="navbar-right">
        <a href="/explore">Explore</a>
        <a href="/stats">Stats</a>
        <a href="/create">Create</a>
        <button className="wallet-btn">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
