import { useEffect, useState } from 'react';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');
  const [status, setStatus] = useState('Loading...');

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

        if (ethData.status === "1" && gasData.status === "1") {
          setEthPrice(`$${parseFloat(ethData.result.ethusd).toFixed(2)}`);
          setGasPrice(`${gasData.result.ProposeGasPrice} GWEI`);
          setStatus('Live');
        } else {
          setStatus('Error fetching data');
        }
      } catch {
        setStatus('Error fetching data');
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      backgroundColor: '#1a1a1a',
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '14px',
      borderRadius: '5px',
    }}>
      <div>
        ETH: {ethPrice} | Gas: {gasPrice} | Status: {status}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>
          Support:
          <a href="https://x.com/Chief_atul" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.25rem', color: '#8a2be2' }}>
            Twitter
          </a> |
          <a href="https://github.com/atuli93" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.25rem', color: '#8a2be2' }}>
            GitHub
          </a> |
          <a href="mailto:atul.chieff60@gmail.com" style={{ marginLeft: '0.25rem', color: '#8a2be2' }}>
            Email
          </a>
          <span style={{ marginLeft: '0.5rem' }}>Name: Atul (atulchief)</span>
        </div>

        <button
          onClick={() => {
            document.body.classList.toggle('dark');
          }}
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
          }}
          aria-label="Toggle dark mode"
        >
          🌓
        </button>
      </div>
    </div>
  );
}
