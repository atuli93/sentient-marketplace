import { useEffect, useState } from 'react';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetch ETH price from CoinGecko (free, no key)
        const ethResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const ethData = await ethResponse.json();
        if (ethData?.ethereum?.usd) {
          setEthPrice(`ETH: $${ethData.ethereum.usd.toFixed(2)}`);
        } else {
          setEthPrice('Error fetching ETH price');
        }

        // Fetch Gas price from Etherscan (still valid with API key)
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
      } catch (error) {
        console.error('Error:', error);
        setEthPrice('Failed to load');
        setGasPrice('Failed to load');
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // every 60 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', background: '#111', color: '#fff', padding: '8px', textAlign: 'center', fontSize: '14px' }}>
      {ethPrice} | {gasPrice}
    </div>
  );
}
