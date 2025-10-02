import { useEffect, useState } from 'react';
import './CryptoBar.css'; // Optional CSS

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // ✅ ETH price from CoinGecko
        const ethResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const ethData = await ethResponse.json();

        if (ethData?.ethereum?.usd) {
          setEthPrice(`ETH: $${ethData.ethereum.usd.toFixed(2)}`);
        } else {
          setEthPrice('Error fetching ETH price');
        }

        // ✅ Gas price from Etherscan (V1 gas endpoint still works)
        const apiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
        if (!apiKey) {
          setGasPrice('No API key set');
          return;
        }

        const gasResponse = await fetch(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`
        );
        const gasData = await gasResponse.json();

        if (gasData.status === '1' && gasData.result?.ProposeGasPrice) {
          setGasPrice(`Gas: ${gasData.result.ProposeGasPrice} GWEI`);
        } else {
          setGasPrice('Error fetching gas price');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setEthPrice('Failed to load');
        setGasPrice('Failed to load');
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-bar">
      {ethPrice} | {gasPrice}
    </div>
  );
}
