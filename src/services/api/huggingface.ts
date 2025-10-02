// src/utils/nftHelpers.ts

export function getTopCollections(limit = 3) {
  return [
    { name: 'BAYC', floorPrice: 12.5, volume24h: 450, change24h: 5.2 },
    { name: 'Azuki', floorPrice: 8.9, volume24h: 280, change24h: 12.3 },
    { name: 'Pudgy Penguins', floorPrice: 6.2, volume24h: 195, change24h: 8.7 },
    { name: 'CryptoPunks', floorPrice: 45.8, volume24h: 320, change24h: -2.1 },
    { name: 'Doodles', floorPrice: 4.8, volume24h: 150, change24h: 6.4 },
  ].slice(0, limit);
}

export function getTrendingCollections() {
  return [
    { name: 'BAYC' },
    { name: 'Azuki' },
    { name: 'Pudgy Penguins' },
    { name: 'CryptoPunks' },
    { name: 'Doodles' },
  ];
}

export function getMarketSummary() {
  return {
    totalVolume: 1245,  // ETH
    avgChange: 7.8,     // %
  };
}
