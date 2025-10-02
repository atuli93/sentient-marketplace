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
    status: 'Live',
  });

  useEffect(() => {
    async function fetchData() {
      try {
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
          Status: {data.status}
          {data.status === 'Live' && <span className="live-dot" />}
        </span>
      </div>

      <div className="support-section">
        <a href="mailto:atul.chieff60@gmail.com" target="_blank" rel="noreferrer">Email</a>
        <a href="https://x.com/Chief_atul" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com/atuli93" target="_blank" rel="noreferrer">GitHub</a>
        <span>Name: Atul (atulchief)</span>
      </div>
    </div>
  );
};

export default CryptoBar;
