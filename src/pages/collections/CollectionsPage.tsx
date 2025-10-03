import React from "react";
import "./CollectionsPage.css";

// Import your NFT images
import AbstractRealm from "../assets/Abstract_Realm.jpg";
import Azuki from "../assets/Azuki.jpg";
import BoredApe from "../assets/Bored_Ape_Yacht_Club.jpg";
import CloneX from "../assets/CloneX.jpg";
import CryptoPunks from "../assets/CryptoPunks.jpg";
import CyberWarrior from "../assets/Cyber_Warrior.jpg";
import DeGod from "../assets/DeGod.jpg";
import Doodles from "../assets/Doodles.jpg";

const collections = [
  {
    id: 1,
    name: "Abstract Realm",
    image: AbstractRealm,
    floor: "12 ETH",
    volume: "9.2K ETH",
  },
  {
    id: 2,
    name: "Azuki",
    image: Azuki,
    floor: "15 ETH",
    volume: "11.4K ETH",
  },
  {
    id: 3,
    name: "Bored Ape Yacht Club",
    image: BoredApe,
    floor: "45 ETH",
    volume: "60K ETH",
  },
  {
    id: 4,
    name: "CloneX",
    image: CloneX,
    floor: "10 ETH",
    volume: "8.5K ETH",
  },
  {
    id: 5,
    name: "CryptoPunks",
    image: CryptoPunks,
    floor: "85 ETH",
    volume: "80K ETH",
  },
  {
    id: 6,
    name: "Cyber Warrior",
    image: CyberWarrior,
    floor: "7.5 ETH",
    volume: "6.3K ETH",
  },
  {
    id: 7,
    name: "DeGod",
    image: DeGod,
    floor: "12 ETH",
    volume: "9.7K ETH",
  },
  {
    id: 8,
    name: "Doodles",
    image: Doodles,
    floor: "5.2 ETH",
    volume: "4.1K ETH",
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

        <div className="coming-soon">
          <h2>More Collections Coming Soon</h2>
          <p>We're working on bringing you more amazing collections!</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
