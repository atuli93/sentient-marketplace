import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '../../contexts/AuthContext';
import SentientLogo from '../../assets/sentient-logo-new.png';
import './Navbar-dark.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { address, isConnected } = useAccount();
  const { connectWallet, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveLink = (path: string) => location.pathname === path;

  useEffect(() => {
    if (isConnected && address && !user) connectWallet(address, 'injected');
  }, [isConnected, address, user, connectWallet]);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Left: Search */}
        <div className="navbar-left">
          <div className="navbar-search">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search collections, NFTs, and creators"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Center: Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={SentientLogo} alt="Sentient" className="logo-image diwali-effect" />
          </Link>
        </div>

        {/* Right: Nav Links + Actions */}
        <div className="navbar-right">
          {/* Nav Links */}
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/marketplace" className={`nav-link ${isActiveLink('/marketplace') ? 'active' : ''}`}>Explore</Link>
            <Link to="/collections" className={`nav-link ${isActiveLink('/collections') ? 'active' : ''}`}>Collections</Link>
            <Link to="/stats" className={`nav-link ${isActiveLink('/stats') ? 'active' : ''}`}>Stats</Link>
            <Link to="/create" className={`nav-link ${isActiveLink('/create') ? 'active' : ''}`}>Create</Link>
          </div>

          {/* Action Buttons */}
          <div className="navbar-actions">
            <button className="action-btn cart-btn" title="Shopping Cart">
              <ShoppingCart size={20} />
            </button>

            {isConnected && (
              <button className="action-btn profile-btn" title="Profile" onClick={() => navigate('/profile')}>
                <User size={20} />
              </button>
            )}

            <div className="login-btn">
              <ConnectButton chainStatus="icon" showBalance={false} />
            </div>

            <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
