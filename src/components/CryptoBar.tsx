import { useEffect, useState } from 'react';
import './CryptoBar.css';

interface CryptoData {
  ethPrice: string;
  gasPrice: string;
  status: string;
  theme: 'light' | 'dark';
}

const CryptoBar = () => {
  const [ethPrice, setEthPrice] = useState<string>('Loading...');
  const [gasPrice, setGasPrice] = useState<string>('Loading...');
  const [status, setStatus] = useState<string>('Live');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
        );
        const data = await response.json();

        if (data.status === '1') {
          setEthPrice(`$${parseFloat(data.result.ethusd).toFixed(2)}`);
        } else {
          setEthPrice('Error fetching ETH price');
        }
      } catch (error) {
        setEthPrice('Error fetching ETH price');
      }
    };

    const fetchGasPrice = async () => {
      try {
        const response = await fetch(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
        );
        const data = await response.json();

        if (data.status === '1') {
          setGasPrice(`${data.result.ProposeGasPrice} GWEI`);
        } else {
          setGasPrice('Error fetching gas price');
        }
      } catch (error) {
        setGasPrice('Error fetching gas price');
      }
    };

    fetchEthPrice();
    fetchGasPrice();

    const interval = setInterval(() => {
      fetchEthPrice();
      fetchGasPrice();
    }, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`crypto-bar ${theme}`}>
      <div className="crypto-info">
        ETH: {ethPrice} | Gas Price: {gasPrice} | Status: {status}
      </div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        🌓
      </button>
      <div className="support-info">
        <strong>Support:</strong> Atul (your name - atulchief)
        <br />
        Twitter: <a href="https://x.com/Chief_atul" target="_blank" rel="noopener noreferrer">@Chief_atul</a>
        <br />
        GitHub: <a href="https://github.com/atuli93" target="_blank" rel="noopener noreferrer">atuli93</a>
        <br />
        Email: <a href="mailto:atul.chieff60@gmail.com">atul.chieff60@gmail.com</a>
      </div>
    </div>
  );
};

export default CryptoBar;
