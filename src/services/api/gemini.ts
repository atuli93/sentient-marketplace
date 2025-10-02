import { GoogleGenerativeAI } from '@google/generative-ai';
import { getTopCollections, getTrendingCollections, getMarketSummary } from '../../utils/nftHelpers';
import { mockNFTs } from '../../data/mock/mockNFTs';

// Initialize Gemini AI client (Free tier: 15 requests/min)
const gemini = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  console.log('🔧 Debug: Sending message to Gemini:', userMessage);

  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    return '🔑 Gemini API key is missing. Add VITE_GEMINI_API_KEY to your .env file.';
  }

  try {
    // Fetch NFT market data
    const topCollections = getTopCollections(3);
    const trendingCollections = getTrendingCollections();
    const marketSummary = getMarketSummary();

    // Build NFT context from mock data
    const nftContext = mockNFTs.map((nft, idx) => `
${idx + 1}. ${nft.name} (${nft.collection.name})
   💰 Price: ${nft.price} ETH | Floor: ${nft.collection.floorPrice} ETH
   ⭐ Rarity: ${nft.rarity} | 👤 Creator: ${nft.creator.name}
   📈 Last Sale: ${nft.lastSale} ETH | ${nft.auction ? '🔨 On Auction' : ''}
   👁️ ${nft.views} views | ❤️ ${nft.likes} likes
`).join('\n');

    const marketSummaryText = `
📊 NFT MARKET SUMMARY:
- Top Collections: ${topCollections.map(c => c.name).join(', ')}
- Trending Collections: ${trendingCollections.map(c => c.name).join(', ')}
- Total Volume: ${marketSummary.totalVolume} ETH
- Average Change: ${marketSummary.avgChange}%
`;

    // Compose system prompt
    const systemPrompt = `
You are ROMA AI, the smart assistant for ROMA NFT Marketplace.

🌟 About ROMA Marketplace:
• Explore Marketplace: Discover 15+ exclusive NFT collections
• Collections: Browse hottest collections with real-time stats
• Stats & Analytics: Market insights with interactive charts
• Create NFT: Mint your own NFTs
• Profile: Manage portfolio and collected NFTs
• AI Chatbot: 24/7 NFT guidance

💎 Featured Collections:
BAYC, Azuki, Pudgy Penguins, CryptoPunks, Doodles, Moonbirds, CloneX, DeGods, Mutant Ape, Meebits, VeeFriends, Cool Cats, World of Women, and more.

🎯 Your Role:
- Introduce ROMA Marketplace features
- Guide users on platform usage
- Analyze and compare available NFT collections
- Provide investment advice
- Explain wallet connection, NFT minting, signature verification
- Answer questions about prices, rarity, floor price, volume

📝 Response Style:
- Clear, helpful, concise English
- Use emojis for readability
- Include numbers and specific data
- Step-by-step guidance if needed

${nftContext}
${marketSummaryText}

User Question: ${userMessage}
`;

    console.log('🔧 Debug: Generating response from Gemini...');

    // Send request to Gemini model
    const model = gemini.getGenerativeModel({ model: 'models/gemini-pro' });
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const answer = response.text();

    console.log('🔧 Debug: Gemini response received:', answer);

    return answer || "Sorry, I couldn't process your request at the moment.";

  } catch (error: any) {
    console.error('❌ Gemini Error:', error);

    // Handle specific errors
    if (error.message?.includes('API_KEY_INVALID')) {
      return '🔑 Invalid Gemini API key.';
    }
    if (error.message?.includes('QUOTA_EXCEEDED')) {
      return '📊 API quota exceeded. Try again later.';
    }
    if (error.message?.includes('RATE_LIMIT_EXCEEDED')) {
      return '⏰ Too many requests. Wait a minute before retrying.';
    }
    if (error.message?.includes('not found') || error.message?.includes('404')) {
      return '🔧 Model not found. Refresh and try again.';
    }

    return `❌ Error: ${error.message || 'Unable to connect to Gemini AI'}`;
  }
};
