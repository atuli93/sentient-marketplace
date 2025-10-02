import OpenAI from 'openai';
import { getTopCollections, getTrendingCollections, getMarketSummary } from '../../utils/nftHelpers';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo purposes
});

export const sendMessage = async (userMessage: string): Promise<string> => {
  console.log('🔧 Debug: Starting sendMessage with:', userMessage);

  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    return '🔑 OpenAI API key is not configured. Add VITE_OPENAI_API_KEY to your .env file.';
  }

  try {
    // Fetch current NFT market data
    const topCollections = getTopCollections(3);
    const trendingCollections = getTrendingCollections();
    const marketSummary = getMarketSummary();

    // Build context for AI
    const nftContext = `
📊 Current NFT Market Data:

🏆 Top Collections by Volume:
${topCollections.map(c => `- ${c.name}: ${c.floorPrice} ETH floor, ${c.volume24h} ETH volume, ${c.change24h}% change`).join('\n')}

📈 Market Summary: ${marketSummary.totalVolume} ETH total volume, ${marketSummary.avgChange}% average change
🔥 Trending Collections: ${trendingCollections.map(c => c.name).join(', ')}
`;

    console.log('🔧 Debug: Sending request to OpenAI...');

    // Send request to OpenAI Chat API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `
You are ROMA, a professional NFT & Web3 AI assistant. 
You are an expert in NFTs, blockchain technology, cryptocurrency markets, and digital art. 
You help users with: 🎨 NFT discovery and analysis, 💎 Price predictions and market trends, 🔗 Blockchain explanations, 💰 Investment advice, 🚀 New collection launches, 📊 Portfolio analysis.
Always respond in clear English, provide structured, helpful answers, and use emojis and line breaks for readability.`
        },
        {
          role: 'system',
          content: nftContext
        },
        {
          role: 'user',
          content: userMessage
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const aiMessage = response.choices[0]?.message?.content?.trim();
    console.log('🔧 Debug: OpenAI response received:', aiMessage);

    return aiMessage || "Sorry, I couldn't process your request.";

  } catch (error: any) {
    console.error('❌ OpenAI Error:', error);

    // Handle common API errors
    if (error.status === 401) return '🔑 Authentication failed. Check your API key.';
    if (error.status === 429 || error.code === 'insufficient_quota') return '💳 OpenAI API quota exceeded. Check your billing plan.';
    if (error.status === 403) return '🚫 Access forbidden. Check your API permissions.';

    return `❌ Error: ${error.message || 'Failed to get response from OpenAI'}`;
  }
};
