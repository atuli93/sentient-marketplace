import React from "react";
import NFTCard from '../../components/NFTCard';
import MarketplaceFilters from '../../components/MarketplaceFilters';
import './MarketplacePage.css'; // your page CSS
import './MarketplacePage-dark.css'; // optional dark mode

// Example mock data
import { mockNFTs } from '../../data/mock/mockNFTs';

const MarketplacePage: React.FC = () => {
  return (
    <div className="marketplace-page app-container">
      <MarketplaceFilters />
      <div className="marketplace-grid">
        {mockNFTs.map((nft) => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
