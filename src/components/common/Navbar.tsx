import { ConnectButton } from '@rainbow-me/rainbowkit';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left: Logo */}
        <div className="navbar-left">
          <img src="/sentient-logo-new.png" alt="ROMA Logo" className="logo" />
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
      </div>
    </header>
  );
};

export default Navbar;
