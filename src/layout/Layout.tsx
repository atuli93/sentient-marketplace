import React, { ReactNode, useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Chatbot from "../components/ui/Chatbot";

import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<"dark-theme" | "light-theme">("dark-theme");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark-theme" | "light-theme";
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme changes
  useEffect(() => {
    document.body.className = theme; // apply theme class on body
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark-theme" ? "light-theme" : "dark-theme"));
  };

  return (
    <div className={`main-layout ${theme}`}>
      {/* Navbar with theme toggle */}
      <header className="layout-header">
        <Navbar />
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "dark-theme" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Page Content */}
      <main className="main-content" role="main" aria-live="polite">
        {children}
      </main>

      {/* Chatbot */}
      <aside className="layout-chatbot" aria-label="AI Assistant">
        <Chatbot />
      </aside>
    </div>
  );
};

export default Layout;
