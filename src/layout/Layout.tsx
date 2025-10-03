import React from 'react';
import Navbar from '../components/common/Navbar';
import Chatbot from '../components/ui/Chatbot';
import './Layout.css';
import '../styles/pages-dark.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />

      <div className="page-layout">
        <main className="main-content">
          {children}
        </main>

        <aside className="filter-sidebar">
          <h4>Recently Listed</h4>
          <h4>Filters</h4>
          <h4>Price</h4>
          <h4>Status</h4>
          <h4>Collections</h4>
          <h4>Rarity</h4>
        </aside>
      </div>

      <Chatbot />
    </div>
  );
};

export default Layout;
