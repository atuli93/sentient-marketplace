// src/utils/nftHelpers.ts

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

// Mock NFT collections
const mockNFTCollections: NFTCollection[] = [
  { name: "Bored Ape Yacht Club", floorPrice: 12.5, volume24h: 450, change24h: 5.2, description: "Iconic PFP collection with strong community" },
  { name: "CryptoPunks", floorPrice: 45.8, volume24h: 320, change24h: -2.1, description: "Original NFT collection, historical significance" },
  { name: "Azuki", floorPrice: 8.9, volume24h: 280, change24h: 12.3, description: "Anime-inspired art with roadmap focus" },
  { name: "Pudgy Penguins", floorPrice: 6.2, volume24h: 195, change24h: 8.7, description: "Cute penguin PFPs with expanding ecosystem" },
];

// Named export helpers
export function getTopCollections(limit: number = 5): NFTCollection[] {
  return [...mockNFTCollections].sort((a, b) => b.volume24h - a.volume24h).slice(0, limit);
}

export function getTrendingCollections(): NFTCollection[] {
  return mockNFTCollections.filter(c => c.change24h > 0);
}

export function getMarketSummary(): MarketSummary {
  const totalVolume = mockNFTCollections.reduce((sum, c) => sum + c.volume24h, 0);
  const avgChange = mockNFTCollections.reduce((sum, c) => sum + c.change24h, 0) / mockNFTCollections.length;
  return {
    totalVolume: totalVolume.toFixed(0),
    avgChange: avgChange.toFixed(1),
    activeCollections: mockNFTCollections.length
  };
}

export function formatPrice(price: number): string {
  return `${price} ETH`;
}

export function formatVolume(volume: number): string {
  return volume >= 1000 ? `${(volume / 1000).toFixed(1)}K ETH` : `${volume} ETH`;
}

export function getInvestmentAdvice(budget: number): string {
  if (budget < 1) return "Budget <1 ETH: explore new collections or secondary traits. Focus on utility & roadmap.";
  if (budget < 5) return "Budget 1-5 ETH: mid-tier collections like Pudgy Penguins, Doodles. Check community & utility.";
  if (budget < 20) return "Budget 5-20 ETH: blue-chip collections like Azuki, Clone X. Timing & market sentiment matter.";
  return "Budget >20 ETH: consider BAYC, CryptoPunks, rare pieces. Diversify your portfolio.";
}
