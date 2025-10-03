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

  // Auto-connect wallet if detected
  useEffect(() => {
    const autoConnect = async () => {
      if (isConnected && address && !user) {
        await connectWallet(address, 'injected');
      }
    };
    autoConnect();
  }, [isConnected, address, user, connectWallet]);

  const handleProfileClick = () => navigate('/profile');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={SentientLogo} alt="Sentient" className="logo-image" />
        </Link>

        {/* Search Bar */}
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

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/marketplace"
            className={`nav-link ${isActiveLink('/') || isActiveLink('/marketplace') ? 'active' : ''}`}
          >
            Explore
          </Link>
          <Link
            to="/collections"
            className={`nav-link ${isActiveLink('/collections') ? 'active' : ''}`}
          >
            Collections
          </Link>
          <Link
            to="/stats"
            className={`nav-link ${isActiveLink('/stats') ? 'active' : ''}`}
          >
            Stats
          </Link>
          <Link
            to="/create"
            className={`nav-link ${isActiveLink('/create') ? 'active' : ''}`}
          >
            Create
          </Link>
        </div>

        {/* User Actions */}
        <div className="navbar-actions">
          <button className="action-btn cart-btn" title="Shopping Cart">
            <ShoppingCart size={20} />
            <span className="btn-label">Cart</span>
          </button>

          {isConnected && (
            <button className="action-btn profile-btn" onClick={handleProfileClick} title="Profile">
              <User size={20} />
              <span className="btn-label">Profile</span>
            </button>
          )}

          {/* Connect Wallet Button */}
          <ConnectButton
            chainStatus="icon"
            showBalance={false}
            className="rainbowkit-connect-button"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
