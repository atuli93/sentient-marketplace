import React, { useEffect, useState } from 'react';
import './CryptoBar.css';

interface CryptoData {
  ethPrice: string;
  gasPrice: string;
  status: string;
}

const CryptoBar: React.FC = () => {
  const [data, setData] = useState<CryptoData>({
    ethPrice: 'Loading...',
    gasPrice: 'Loading...',
    status: 'Loading...',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        // Simulated API values — replace with real API calls if available
        const ethPrice = '$4476.26';
        const gasPrice = '45 GWEI';
        const status = 'Live';
        setData({ ethPrice, gasPrice, status });
      } catch {
        setData({ ethPrice: 'Error', gasPrice: 'Error', status: 'Error' });
      }
    }
    fetchData();
  }, []);

  return (
    <footer className="crypto-bar">
      <div className="crypto-info">
        <span>ETH: {data.ethPrice}</span>
        <span>Gas: {data.gasPrice}</span>
        <span className="status">
          <span className="live-dot" title="Live Status" /> {data.status}
        </span>
      </div>
      <nav className="support-links" aria-label="Support Information">
        <a href="#" className="support-link" tabIndex={0}>Support</a>
        <a href="https://x.com/Chief_atul" target="_blank" rel="noreferrer" className="support-link" tabIndex={0}>Twitter @Chief_atul</a>
        <a href="https://github.com/atuli93" target="_blank" rel="noreferrer" className="support-link" tabIndex={0}>GitHub atuli93</a>
        <a href="mailto:atul.chieff60@gmail.com" className="support-link" tabIndex={0}>Email</a>
      </nav>
    </footer>
  );
};

export default CryptoBar;
