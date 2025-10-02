import { useEffect, useState } from 'react';

export default function CryptoBar() {
  const [ethPrice, setEthPrice] = useState('Loading...');
  const [gasPrice, setGasPrice] = useState('Loading...');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ethRes = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const ethData = await ethRes.json();
        setEthPrice(`$${ethData.ethereum.usd.toFixed(2)}`);

        const gasRes = await fetch(
          `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
        );
        const gasData = await gasRes.json();
        setGasPrice(`${gasData.result.SafeGasPrice} GWEI`);
      } catch (error) {
        console.error('Failed to fetch prices:', error);
        setGasPrice('Unavailable');
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.bar}>
      <div style={styles.left}>
        <span style={styles.dot}></span> Live
        <span>ETH: {ethPrice}</span>
        <span>Gas: {gasPrice}</span>
        <a href="#">Networks</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <div style={styles.right}>
        <a href="#">Support</a>
        <span style={{ cursor: 'pointer' }} onClick={() => toggleTheme()}>🌓</span>
        <button>Collector</button>
        <button><strong>Crypto</strong></button>
        <select>
          <option>USD</option>
          <option>EUR</option>
          <option>BTC</option>
        </select>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  bar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 9999,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  dot: {
    width: '10px',
    height: '10px',
    backgroundColor: 'limegreen',
    borderRadius: '50%',
    display: 'inline-block',
  },
};

function toggleTheme() {
  const root = document.documentElement;
  root.classList.toggle('light-mode');
}
