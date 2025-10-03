import React, { useEffect, useState } from 'react';
import './CryptoBar.css';

interface CryptoData {
  ethPrice: string;
  gasPrice: string;
  status: 'Live' | 'Offline' | string;
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
        // Replace with actual API calls or hooks here
        const ethPrice = '$4476.26';
        const gasPrice = '45 GWEI';
        const status = 'Live';

        setData({ ethPrice, gasPrice, status });
      } catch (error) {
        setData({ ethPrice: 'Error', gasPrice: 'Error', status: 'Error fetching data' });
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
          {data.status === 'Live' && <span className="live-indicator" />}
          {data.status}
        </span>
      </div>

      <div className="support-section">
        <strong>Support</strong>
        <div>Name: Atul (your name - atulchief)</div>
        <div>
          Twitter:{' '}
          <a href="https://x.com/Chief_atul" target="_blank" rel="noreferrer">
            @Chief_atul
          </a>
        </div>
        <div>
          GitHub:{' '}
          <a href="https://github.com/atuli93" target="_blank" rel="noreferrer">
            atuli93
          </a>
        </div>
        <div>
          Email:{' '}
          <a href="mailto:atul.chieff60@gmail.com">atul.chieff60@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default CryptoBar;
