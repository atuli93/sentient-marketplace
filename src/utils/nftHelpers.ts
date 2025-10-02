// NFT Market Data & Helper Functions for AI Assistant

export interface NFTCollection {
  name: string;
  floorPrice: number;
  volume24h: number;
  change24h: number;
  description: string;
}

export interface MarketTrend {
  category: string;
  trending: string[];
  growth: number;
}

// Mock NFT collections for AI responses
export const mockNFTCollections: NFTCollection[] = [
  {
    name: "Bored Ape Yacht Club",
    floorPrice: 12.5,
    volume24h: 450,
    change24h: 5.2,
    description: "Iconic PFP collection with a strong community"
  },
  {
    name: "CryptoPunks",
    floorPrice: 45.8,
    volume24h: 320,
    change24h: -2.1,
    description: "Original NFT collection with historical significance"
  },
  {
    name: "Azuki",
    floorPrice: 8.9,
    volume24h: 280,
    change24h: 12.3,
    description: "Anime-inspired NFT art with roadmap focus"
  },
  {
    name: "Pudgy Penguins",
    floorPrice: 6.2,
    volume24h: 195,
    change24h: 8.7,
    description: "Cute penguin PFPs with an expanding ecosystem"
  }
];

// Mock NFT market trends
export const mockMarketTrends: MarketTrend[] = [
  {
    category: "PFP (Profile Pictures)",
    trending: ["Azuki", "Pudgy Penguins", "Doodles"],
    growth: 15.3
  },
  {
    category: "Gaming NFTs",
    trending: ["Axie Infinity", "Gods Unchained", "The Sandbox"],
    growth: 22.7
  },
  {
    category: "Art NFTs",
    trending: ["Art Blocks", "SuperRare", "Foundation"],
    growth: 8.9
  }
];

// -----------------------------
// Helper Functions
// -----------------------------

// Get top NFT collections by 24h volume
export const getTopCollections = (limit: number = 5): NFTCollection[] => {
  return mockNFTCollections
    .sort((a, b) => b.volume24h - a.volume24h)
    .slice(0, limit);
};

// Get trending NFT collections (positive 24h change)
export const getTrendingCollections = (): NFTCollection[] => {
  return mockNFTCollections.filter(c => c.change24h > 0);
};

// Get overall market summary
export const getMarketSummary = () => {
  const totalVolume = mockNFTCollections.reduce((sum, c) => sum + c.volume24h, 0);
  const avgChange = mockNFTCollections.reduce((sum, c) => sum + c.change24h, 0) / mockNFTCollections.length;

  return {
    totalVolume: totalVolume.toFixed(0),
    avgChange: avgChange.toFixed(1),
    activeCollections: mockNFTCollections.length
  };
};

// Format price in ETH
export const formatPrice = (price: number): string => {
  return `${price} ETH`;
};

// Format volume (short-hand for thousands)
export const formatVolume = (volume: number): string => {
  if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K ETH`;
  }
  return `${volume} ETH`;
};

// Give simple investment advice based on budget
export const getInvestmentAdvice = (budget: number): string => {
  if (budget < 1) {
    return "With a budget under 1 ETH, explore new collections or secondary traits from larger collections. Focus on utility and roadmap.";
  } else if (budget < 5) {
    return "Budget 1-5 ETH is suitable for mid-tier collections like Pudgy Penguins or Doodles. Look for strong community and clear utility.";
  } else if (budget < 20) {
    return "Budget 5-20 ETH can target blue-chip collections like Azuki or Clone X. Pay attention to timing and market sentiment.";
  } else {
    return "Budget above 20 ETH allows considering BAYC, CryptoPunks, or rare pieces from established collections. Diversify your portfolio.";
  }
};
