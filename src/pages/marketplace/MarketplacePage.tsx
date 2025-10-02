import React from "react";
import NFTCard from "../../components/NFTCard";
import FilterSidebar from "../../components/MarketplaceFilters";
import "./MarketplacePage.css";

const mockNFTs = [
  { id: 1, image: "/assets/nft1.png", title: "CryptoKitty #1", collection: "CryptoKitties", price: 1.2, likes: 12 },
  { id: 2, image: "/assets/nft2.png", title: "Art Piece #2", collection: "DigitalArt", price: 0.8, likes: 7 },
  { id: 3, image: "/assets/nft3.png", title: "Rare NFT #3", collection: "RareCollection", price: 3.5, likes: 20 },
];

const MarketplacePage: React.FC = () => {
  return (
    <div className="marketplace-page">
      <FilterSidebar />
      <div className="marketplace-grid">
        {mockNFTs.map((nft) => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
