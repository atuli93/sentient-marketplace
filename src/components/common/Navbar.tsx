import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './Navbar.css'; // Uses your updated CSS

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left: Search Bar */}
      <div className="navbar-left">
        <input
          type="text"
          className="search-bar"
          placeholder="Search NFTs, collections..."
        />
      </div>

      {/* Center: Logo + Navigation */}
      <div className="flex items-center gap-6">
        <div className="logo">ROMA</div>
        <nav className="flex gap-4">
          <a href="/marketplace">Marketplace</a>
          <a href="/create">Create</a>
          <a href="/collections">Collections</a>
          <a href="/profile">Profile</a>
        </nav>
      </div>

      {/* Right: Wallet Connect */}
      <div className="navbar-right">
        <ConnectButton />
      </div>
    </header>
  );
};

export default Navbar;
