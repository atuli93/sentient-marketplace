// src/utils/nftHelpers.ts
// NFT Market Data & Helper Functions for AI Assistant

export interface NFTCollection {
  name: string;
  floorPrice: number;
  volume24h: number;
  change24h: number;
  description: string;
}

export interface MarketSummary {
  totalVolume: string;
  avgChange: string;
  activeCollections: number;
}

// Mock NFT market data
export const mockNFTCollections: NFTCollection[] = [
  {
    name: "Bored Ape Yacht Club",
    floorPrice: 12.5,
    volume24h: 450,
    change24h: 5.2,
    description: "Iconic PFP collection with strong community"
  },
  {
    name: "CryptoPunks",
    floorPrice: 45.8,
    volume24h: 320,
    change24h: -2.1,
    description: "Original NFT collection, historical significance"
  },
  {
    name: "Azuki",
    floorPrice: 8.9,
    volume24h: 280,
    change24h: 12.3,
    description: "Anime-inspired art with roadmap focus"
  },
  {
    name: "Pudgy Penguins",
    floorPrice: 6.2,
    volume24h: 195,
    change24h: 8.7,
    description: "Cute penguin PFPs with expanding ecosystem"
  }
];

// ----------------------
// Helper Functions
// ----------------------

/**
 * Get the top NFT collections by 24h volume
 */
export const getTopCollections = (limit: number = 5): NFTCollection[] => {
  return mockNFTCollections
    .sort((a, b) => b.volume24h - a.volume24h)
    .slice(0, limit);
};

/**
 * Get trending NFT collections (positive 24h change)
 */
export const getTrendingCollections = (): NFTCollection[] => {
  return mockNFTCollections.filter(c => c.change24h > 0);
};

/**
 * Get market summary data
 */
export const getMarketSummary = (): MarketSummary => {
  const totalVolume = mockNFTCollections.reduce((sum, col) => sum + col.volume24h, 0);
  const avgChange = mockNFTCollections.reduce((sum, col) => sum + col.change24h, 0) / mockNFTCollections.length;

  return {
    totalVolume: totalVolume.toFixed(0),
    avgChange: avgChange.toFixed(1),
    activeCollections: mockNFTCollections.length
  };
};

/**
 * Format ETH price
 */
export const formatPrice = (price: number): string => {
  return `${price} ETH`;
};

/**
 * Format volume for display
 */
export const formatVolume = (volume: number): string => {
  if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K ETH`;
  }
  return `${volume} ETH`;
};

/**
 * Provide investment advice based on user budget
 */
export const getInvestmentAdvice = (budget: number): string => {
  if (budget < 1) {
    return "With a budget under 1 ETH, explore new collections or secondary traits from bigger collections. Focus on utility and roadmap.";
  } else if (budget < 5) {
    return "Budget 1-5 ETH: Consider mid-tier collections like Pudgy Penguins or Doodles. Look for strong communities and clear utility.";
  } else if (budget < 20) {
    return "Budget 5-20 ETH: You can target blue-chip collections like Azuki or Clone X. Pay attention to timing and market sentiment.";
  } else {
    return "Budget above 20 ETH: Consider BAYC, CryptoPunks, or rare pieces from established collections. Diversify your portfolio.";
  }
};

// ----------------------
// Re-export all helpers (optional for clarity)
// ----------------------
export {
  getTopCollections,
  getTrendingCollections,
  getMarketSummary,
  formatPrice,
  formatVolume,
  getInvestmentAdvice
};
