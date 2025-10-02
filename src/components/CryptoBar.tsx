import { BrowserRouter as Router } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config as wagmiConfig } from './config/wagmi';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './layout/Layout';
import AppRoutes from './routes';
import Chatbot from './components/ui/Chatbot';
import CryptoBar from './components/CryptoBar';  // <---- Import CryptoBar here
import './App.css';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#8a2be2',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
          })}
        >
          <AuthProvider>
            <Router>
              <Layout>
                <AppRoutes />
                <Chatbot />
                <CryptoBar />  {/* <---- Add CryptoBar here */}
              </Layout>
            </Router>
          </AuthProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
