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
        <span>ETH: {da
