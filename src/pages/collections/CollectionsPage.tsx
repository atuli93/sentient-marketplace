import React from "react";
import "./CollectionsPage.css";

// Simple data array (easier to update)
const collections = [
  {
    id: 1,
    name: "Hypurr",
    image:
      "https://images.unsplash.com/photo-1612760721786-a42eb89aba02?q=80&w=1935&auto=format&fit=crop",
    floor: "9.3 ETH",
    volume: "7.4K ETH",
  },
  {
    id: 2,
    name: "Milady Maker",
    image:
      "https://images.unsplash.com/photo-1746039076843-35f8883646cf?q=80&w=1957&auto=format&fit=crop",
    floor: "1.63 ETH",
    volume: "589.66 ETH",
  },
  {
    id: 3,
    name: "MAX PAIN AND FRENS BY XCOPY",
    image:
      "https://images.unsplash.com/photo-1620065692611-92d81d646631?q=80&w=2070&auto=format&fit=crop",
    floor: "0.93 ETH",
    volume: "16.27 ETH",
  },
  {
    id: 4,
    name: "Rollbots",
    image:
      "https://images.unsplash.com/photo-1613923339596-bd8f3ec7abd5?q=80&w=2050&auto=format&fit=crop",
    floor: "0.62 ETH",
    volume: "0.93 ETH",
  },
  {
    id: 5,
    name: "Mocaverse",
    image:
      "https://images.unsplash.com/photo-1752487120835-ca76ebb00e8a?q=80&w=2080&auto=format&fit=crop",
    floor: "0.54 ETH",
    volume: "25.27 ETH",
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

