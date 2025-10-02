import { useEffect, useState } from 'react';
import './CryptoBar.css';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // ETH price from CoinGecko
        const ethRes = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const ethData = await ethRes.json();

        if (ethData?.ethereum?.usd) {
          setEthPrice(`ETH: $${ethData.ethereum.usd.toFixed(2)}`);
        } else {
          setEthPrice('ETH price error');
        }

        // Gas price from Etherscan
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
          setGasPrice(`Gas: ${gasData.result.ProposeGasPrice} GWEI`);
        } else {
          setGasPrice('Gas price error');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setEthPrice('Error');
        setGasPrice('Error');
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-bar">
      {ethPrice} | {gasPrice}
    </div>
  );
}
