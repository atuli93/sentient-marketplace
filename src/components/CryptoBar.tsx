import React, { useEffect, useState } from 'react';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const apiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
        if (!apiKey) {
          setEthPrice('No API key set');
          setGasPrice('No API key set');
          return;
        }

        // Fetch ETH price in USD
        const ethResponse = await fetch(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`
        );
        const ethData = await ethResponse.json();

        if (ethData.status === '1' && ethData.result?.ethusd) {
          setEthPrice(`ETH: $${parseFloat(ethData.result.ethusd).toFixed(2)}`);
        } else {
          setEthPrice('Error fetching ETH price');
        }

        // Fetch gas price in Gwei
        const gasResponse = await fetch(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`
        );
        const gasData = await gasResponse.json();

        if (gasData.status === '1' && gasData.result?.ProposeGasPrice) {
          setGasPrice(`Gas: ${gasData.result.ProposeGasPrice} GWEI`);
        } else if (gasData.status === '1' && gasData.result?.SafeGasPrice) {
          setGasPrice(`Gas: ${gasData.result.SafeGasPrice} GWEI (safe)`);
        } else {
          setGasPrice('Error fetching gas price');
        }
      } catch (error) {
        setEthPrice('Failed to load');
        setGasPrice('Failed to load');
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();

    const interval = setInterval(fetchPrices, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#111',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '14px',
        textAlign: 'center',
        zIndex: 9999,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {ethPrice} | {gasPrice}
    </div>
  );
}
