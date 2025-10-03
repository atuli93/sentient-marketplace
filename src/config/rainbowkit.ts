import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

// Get WalletConnect project ID from environment
// Use a valid placeholder or leave empty for local dev (only MetaMask/injected wallets)
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'BHU9C9IUHV1QVEX67V2D3JW49VRDMTTDMD';

// RainbowKit config
export const config = getDefaultConfig({
  appName: 'ROMA NFT Marketplace',
  projectId,
  chains: [mainnet, sepolia],
  ssr: false,
});
