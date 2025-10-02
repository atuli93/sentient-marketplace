import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <div className="logo">ROMA</div>
      </div>

      {/* Center: Navigation Links */}
      <nav className="navbar-center">
        <a href="/marketplace">Explore</a>
        <a href="/collections">Collections</a>
        <a href="/stats">Stats</a>
        <a href="/create">Create</a>
      </nav>

      {/* Right: Wallet Connect */}
      <div className="navbar-right">
        <ConnectButton />
      </div>
    </header>
  );
};

export default Navbar;
