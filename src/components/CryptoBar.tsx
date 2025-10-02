import { useEffect, useState } from 'react';
import './CryptoBar.css';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetch ETH price from CoinGecko
        const ethRes = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const ethData = await ethRes.json();
        if (ethData?.ethereum?.usd != null) {
          setEthPrice(`$${ethData.ethereum.usd.toFixed(2)}`);
        } else {
          setEthPrice('Error');
        }

        // Fetch gas price from Etherscan
        const apiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
        if (!apiKey) {
          setGasPrice('No API key');
          return;
        }
        const gasRes = await fetch(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`
        );
        const gasData = await gasRes.json();
        if (gasData.status === '1' && gasData.result?.ProposeGasPrice) {
          setGasPrice(`${gasData.result.ProposeGasPrice} GWEI`);
        } else {
          setGasPrice('Error');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setEthPrice('Failed');
        setGasPrice('Failed');
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('light-mode');
  };

  return (
    <div className="crypto-bar-full">
      <div className="left">
        <span className="live-dot"></span>
        <span className="live-text">Live</span>
        <span className="eth-price">ETH: {ethPrice}</span>
        <span className="gas-price">Gas: {gasPrice}</span>
        <a href="#">Networks</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>

      <div className="right">
        <a href="#">Support</a>
        <button onClick={toggleTheme} className="theme-toggle">🌓</button>
        <button>Collector</button>
        <button><strong>Crypto</strong></button>
        <select>
          <option>USD</option>
          <option>EUR</option>
          <option>BTC</option>
        </select>
      </div>
    </div>
  );
}
