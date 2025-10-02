import React, { useEffect, useState } from 'react';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');
  const [showSupportInfo, setShowSupportInfo] = useState(false);
  const [showThemeToggle, setShowThemeToggle] = useState(false);
  const [showCollectorInfo, setShowCollectorInfo] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const apiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
        if (!apiKey) {
          setEthPrice('No API key set');
          setGasPrice('No API key set');
          return;
        }

        // Fetch ETH price
        const ethResponse = await fetch(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`
        );
        const ethData = await ethResponse.json();

        if (ethData.status === '1' && ethData.result?.ethusd) {
          setEthPrice(`ETH: $${parseFloat(ethData.result.ethusd).toFixed(2)}`);
        } else {
          setEthPrice('Error fetching ETH price');
        }

        // Fetch Gas price
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
        setEthPrice('Failed to load');
        setGasPrice('Failed to load');
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Refresh every 60s

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`crypto-bar ${theme}`}>
      <div className="prices">
        <span>{ethPrice}</span> | <span>{gasPrice}</span> | <span>Status: Live</span>
      </div>

      <div className="controls">
        <button onClick={() => setShowSupportInfo((v) => !v)}>Support</button>
        <button onClick={() => setShowThemeToggle((v) => !v)}>🌓 Theme</button>
        <button onClick={() => setShowCollectorInfo((v) => !v)}>Collector</button>
        <button onClick={() => alert('Crypto info coming soon!')}>Crypto</button>
      </div>

      {showSupportInfo && (
        <div className="info-popup support-info">
          <h4>Support</h4>
          <p><strong>Name:</strong> Atul your name - atulchief</p>
          <p>
            <strong>Twitter:</strong>{' '}
            <a href="https://x.com/Chief_atul" target="_blank" rel="noopener noreferrer">
              @Chief_atul
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/atuli93" target="_blank" rel="noopener noreferrer">
              github.com/atuli93
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:atul.chieff60@gmail.com">atul.chieff60@gmail.com</a>
          </p>
        </div>
      )}

      {showThemeToggle && (
        <div className="info-popup theme-toggle-info">
          <h4>Theme Toggle</h4>
          <p>Current theme: <strong>{theme}</strong></p>
          <button onClick={toggleTheme}>
            Switch to {theme === 'dark' ? 'light' : 'dark'} theme
          </button>
        </div>
      )}

      {showCollectorInfo && (
        <div className="info-popup collector-info">
          <h4>Collector</h4>
          <p>This section could include info about NFTs or wallet collector stats.</p>
        </div>
      )}
    </div>
  );
}
