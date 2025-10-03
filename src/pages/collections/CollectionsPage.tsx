import React from "react";
import "./CollectionsPage.css";

// Simple data array (easier to update)
const collections = [
  {
    id: 1,
    name: "Cosmic Wanderers",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop",
    floor: "9.3 ETH",
    volume: "7.4K ETH",
  },
  {
    id: 2,
    name: "Neon Dreams",
    image:
      "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=400&h=200&fit=crop",
    floor: "5.2 ETH",
    volume: "3.1K ETH",
  },
  {
    id: 3,
    name: "Pixel Samurai",
    image:
      "https://images.unsplash.com/photo-1611419010196-b43f7aa7c8f8?w=400&h=200&fit=crop",
    floor: "2.8 ETH",
    volume: "1.9K ETH",
  },
  {
    id: 4,
    name: "Abstract Realm",
    image:
      "https://images.unsplash.com/photo-1618001789159-5cf8e31804d1?w=400&h=200&fit=crop",
    floor: "12 ETH",
    volume: "9.2K ETH",
  },
  {
    id: 5,
    name: "Cyber Warriors",
    image:
      "https://images.unsplash.com/photo-1621961458944-60aa1e7c50a3?w=400&h=200&fit=crop",
    floor: "7.5 ETH",
    volume: "6.3K ETH",
  },
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="collections-page">
      <header className="collections-header">
        <h1>Featured Collections</h1>
        <p>Discover trending and popular NFT collections</p>
      </header>

      <div className="collections-grid">
        {collections.map((col) => (
          <div key={col.id} className="collection-card">
            <div className="collection-banner">
              <img src={col.image} alt={col.name} />
            </div>
            <div className="collection-info">
              <h3>{col.name}</h3>
              <p>
                Floor: {col.floor} • Volume: {col.volume}
              </p>
            </div>
          </div>
        ))}

        {/* Placeholder for future collections */}
        <div className="coming-soon">
          <h2>More Collections Coming Soon</h2>
          <p>We're working on bringing you more amazing collections!</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
