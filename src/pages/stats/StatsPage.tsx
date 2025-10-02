import React from 'react';
import './StatsPage.css';

const StatsPage: React.FC = () => {
  return (
    <div className="stats-page">
      <div className="stats-header">
        <h1>Marketplace Stats</h1>
        <p>Real-time statistics and analytics</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Volume</h3>
          <div className="stat-value">8,232 ETH</div>
          <div className="stat-change positive">+44.4%</div>
        </div>

        <div className="stat-card">
          <h3>Total Sales</h3>
          <div className="stat-value">23,929</div>
          <div className="stat-change positive">+14.2%</div>
        </div>

        <div className="stat-card">
          <h3>Active Users</h3>
          <div className="stat-value">9,122</div>
          <div className="stat-change negative">-4.1%</div>
        </div>

        <div className="stat-card">
          <h3>Average Price</h3>
          <div className="stat-value">0.4 ETH</div>
          <div className="stat-change positive">+6.3%</div>
        </div>
      </div>

      <div className="advanced-analytics">
        <h2>Advanced Analytics</h2>
        <p>Comprehensive insights for the marketplace.</p>

        <div className="analytics-features">
          <div className="feature-card">
            <h3>📊 Volume Trends</h3>
            <p>Track daily, weekly, and monthly trading volumes across all collections.</p>
          </div>

          <div className="feature-card">
            <h3>🛒 Sales Insights</h3>
            <p>Analyze top-selling NFTs, categories, and user activity in real-time.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Price Analytics</h3>
            <p>Monitor average prices, price growth, and fluctuations for smarter trading.</p>
          </div>

          <div className="feature-card">
            <h3>👥 User Engagement</h3>
            <p>See active users, new registrations, and top collectors across the platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
