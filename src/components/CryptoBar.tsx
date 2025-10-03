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
        const ethPrice = '$4476.26'; // stub
        const gasPrice = '45 GWEI';
        const status = 'Live';

        setData({ ethPrice, gasPrice, status });
      } catch (error) {
        setData({ ethPrice: 'Error', gasPrice: 'Error', status: 'Offline' });
      }
    }

    fetchData();
  }, []);

  return (
    <div className="crypto-bar">
      <div className="crypto-info">
        <span>ETH: {data.ethPrice}</span>
        <span>Gas: {data.gasPrice}</span>
        <span className="status">
          <span className="live-indicator"></span>
          {data.status}
        </span>
      </div>

      <div className="support-section">
        <a
          href="https://x.com/Chief_atul"
          target="_blank"
          rel="noreferrer"
          className="support-link"
        >
          Support — @Chief_atul
        </a>
      </div>
    </div>
  );
};

export default CryptoBar;
