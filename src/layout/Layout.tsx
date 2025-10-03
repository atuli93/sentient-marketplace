import type { ReactNode, FC } from 'react'; // type-only import
import { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Chatbot from '../components/ui/Chatbot';
import './Layout.css';
import '../styles/pages-dark.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'dark-theme' | 'light-theme'>('dark-theme');

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark-theme' | 'light-theme';
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme and save to localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  return (
    <div className={`main-layout ${theme}`}>
      <header className="layout-header">
        <Navbar />
        {/* Small theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark-theme' ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="main-content">
        {children}
      </main>

      <aside className="layout-chatbot" aria-label="AI Assistant">
        <Chatbot />
      </aside>
    </div>
  );
};

export default Layout;
