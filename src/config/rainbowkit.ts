// src/config/rainbowkit.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

// Load WalletConnect Project ID from environment variables
// Fallback to placeholder if not set
const projectId: string =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ||
  'c7708575a2c7c0c8c7c0c8c7c0c8c7c0';

// RainbowKit configuration
export const rainbowKitConfig = getDefaultConfig({
  appName: 'ROMA NFT Marketplace',
  projectId,
  chains: [mainnet, sepolia],
  showRecentTransactions: true,
  // Optional: hide balance if you want minimal button
  showBalance: false,
  modalSize: 'compact',
  theme: {
    // Override colors for pink button
    accentColor: '#f26486',
    accentColorForeground: '#ffffff',
    borderRadius: '12px',
    fontStack: 'system',
    overlayBlur: 'small',
  },
  // Disable SSR warnings
  ssr: false,
});
