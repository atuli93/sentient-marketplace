import { useEffect, useState } from 'react';
import './CryptoBar.css';

const CryptoBar = () => {
  // Removed unused interface and unused setStatus state

  // Only one state holding all data together
  const [cryptoData, setCryptoData] = useState({
    ethPrice: null as number | null,
    gasPrice: null as number | null,
    status: 'Loading...',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const ethRes = await fetch(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
        );
        const ethData = await ethRes.json();

        const gasRes = await fetch(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
        );
        const gasData = await gasRes.json();

        if (ethData.status === '1' && gasData.status === '1') {
          setCryptoData({
            ethPrice: parseFloat(ethData.result.ethusd),
            gasPrice: parseFloat(gasData.result.ProposeGasPrice),
            status: 'Live',
          });
        } else {
          setCryptoData((prev) => ({ ...prev, status: 'Error fetching data' }));
        }
      } catch (error) {
        setCryptoData((prev) => ({ ...prev, status: 'Error fetching data' }));
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-bar">
      <div className="crypto-info">
        ETH: {cryptoData.ethPrice ? `$${cryptoData.ethPrice.toFixed(2)}` : 'Loading...'} |{' '}
        Gas: {cryptoData.gasPrice ? `${cryptoData.gasPrice} GWEI` : 'Loading...'} | Status: {cryptoData.status}
      </div>

      <div className="support-section">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="https://x.com/Chief_atul" target="_blank" rel="noopener noreferrer">
              Twitter: @Chief_atul
            </a>
          </li>
          <li>
            <a href="https://github.com/atuli93" target="_blank" rel="noopener noreferrer">
              GitHub: atuli93
            </a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:atul.chieff60@gmail.com" target="_blank" rel="noopener noreferrer">
              atul.chieff60@gmail.com
            </a>
          </li>
          <li>Name: Atul (Your name - atulchief)</li>
        </ul>
      </div>

      <div className="extras">
        <button className="theme-toggle" aria-label="Toggle theme">
          🌓
        </button>
        <div className="collector">Collector</div>
        <div className="info">Crypto and add some info also</div>
      </div>
    </div>
  );
};

export default CryptoBar;
