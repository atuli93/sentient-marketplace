import React from "react";
import "./StatsPage.css";

// Stats array with positive/negative trend
const stats = [
  { title: "Total Volume", value: "8,232 ETH", change: "+44.4%", positive: true },
  { title: "Total Sales", value: "23,929", change: "+14.2%", positive: true },
  { title: "Active Users", value: "9,122", change: "-4.1%", positive: false },
  { title: "Average Price", value: "0.4 ETH", change: "+6.3%", positive: true },
  { title: "Total Collections", value: "1,042", change: "+8.7%", positive: true },
  { title: "New Listings", value: "512", change: "-2.1%", positive: false },
  { title: "Floor Price", value: "0.8 ETH", change: "+3.4%", positive: true },
  { title: "Top Seller Volume", value: "1,205 ETH", change: "+12.8%", positive: true },
  { title: "Most Active Collection", value: "Azuki", change: "+5.1%", positive: true },
  { title: "Unique Buyers", value: "3,890", change: "+7.5%", positive: true },
];

const StatsPage: React.FC = () => {
  return (
    <div className="stats-page">
      {/* Header */}
      <div className="stats-header">
        <h1>Marketplace Stats</h1>
        <p>Real-time analytics to track NFT marketplace activity</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-change ${stat.positive ? "positive" : "negative"}`}>
              {stat.positive ? "▲" : "▼"} {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="coming-soon">
        <h2>Additional Stats on the Way</h2>
        <p>Stay tuned! We're expanding our analytics to give you deeper marketplace insights.</p>
      </div>
    </div>
  );
};

export default StatsPage;
