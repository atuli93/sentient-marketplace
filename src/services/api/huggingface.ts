// src/services/api/huggingface.ts
import { HfInference } from '@huggingface/inference';
import { getTopCollections, getTrendingCollections, getMarketSummary } from '../../utils/nftHelpers';

// Initialize Hugging Face API (free tier works without key)
const hf = new HfInference(import.meta.env.VITE_HF_API_KEY || '');

export const sendMessageToHuggingFace = async (message: string): Promise<string> => {
  console.log('🔧 Debug: Starting Hugging Face request with:', message);
  console.log('🔧 Debug: HF API Key exists:', !!import.meta.env.VITE_HF_API_KEY);

  try {
    // Get current NFT market data for context
    const topCollections = getTopCollections(3);
    const trendingCollections = getTrendingCollections();
    const marketSummary = getMarketSummary();

    const nftContext = `
Current NFT Market Data:
Top Collections by 24h Volume:
${topCollections.map(c => `- ${c.name}: ${c.floorPrice} ETH floor, ${c.volume24h} ETH volume, ${c.change24h}% change`).join('\n')}

Market Summary: ${marketSummary.totalVolume} ETH total volume, ${marketSummary.avgChange}% average change

Trending Collections: ${trendingCollections.map(c => c.name).join(', ')}
`;

    const systemPrompt = `You are ROMA, a professional NFT & Web3 AI assistant. You are an expert in NFTs, blockchain technology, cryptocurrency markets, and digital art.

${nftContext}

User question: ${message}

ROMA's response:`;

    console.log('🔧 Debug: Making Hugging Face request...');

    // Model fallback sequence
    const models = [
      'microsoft/DialoGPT-large',
      'microsoft/DialoGPT-medium',
      'facebook/blenderbot-400M-distill',
      'google/flan-t5-base',
      'bigscience/bloom-560m'
    ];

    let response;

    try {
      response = await hf.textGeneration({
        model: models[0],
        inputs: systemPrompt,
        parameters: {
          max_new_tokens: 500,
          temperature: 0.8,
          repetition_penalty: 1.1,
          return_full_text: false,
          do_sample: true,
          top_p: 0.9
        }
      });
    } catch (error) {
      console.warn('Model 1 failed, trying model 2...');
      response = await hf.textGeneration({
        model: models[1],
        inputs: `User: ${message}\nROMA (NFT Expert):`,
        parameters: {
          max_new_tokens: 300,
          temperature: 0.8,
          return_full_text: false,
          do_sample: true
        }
      });
    }

    let text = response.generated_text?.trim() || '';

    // Clean up response
    if (text.startsWith('User:') || text.startsWith('ROMA:')) {
      text = text.split('\n')[0].replace(/^(User:|ROMA.*?:)/, '').trim();
    }

    console.log('🔧 Debug: HF response received:', text);

    if (!text || text.length < 10) {
      return generateFallbackResponse(message, nftContext);
    }

    return text;

  } catch (error: any) {
    console.error('❌ Hugging Face Error Details:', error);

    if (error.message?.includes('Authorization')) {
      return '🔑 Invalid API key. HF free tier works without a key!';
    }
    if (error.message?.includes('rate limit') || error.message?.includes('429')) {
      return '⏰ Too many requests. Please wait 1 minute and try again.';
    }
    if (error.message?.includes('model') && error.message?.includes('not found')) {
      return '🔧 Model busy. Trying another model...';
    }

    return generateFallbackResponse(message, '');
  }
};

// Fallback response for unavailable HF API or small responses
function generateFallbackResponse(message: string, nftContext: string): string {
  return `🤖 **ROMA AI Fallback Response**:

I cannot provide a live AI answer right now. However, here is some context from the current NFT market:

${nftContext}

You can ask about marketplace features, wallet setup, NFT creation, collection analysis, or price trends.`;
}
