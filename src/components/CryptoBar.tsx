<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Crypto Header Bar</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; }
    .crypto-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      background-color: #111;
      color: #fff;
      font-size: 14px;
    }
    .left, .right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .live-dot {
      height: 10px;
      width: 10px;
      background-color: #00ff00;
      border-radius: 50%;
      display: inline-block;
    }
    .theme-toggle {
      cursor: pointer;
    }
  </style>
</head>
<body>

<div class="crypto-bar">
  <div class="left">
    <span class="live-dot"></span> Live
    <span id="eth-price">ETH: Loading...</span>
    <span id="gas-price">Gas: Loading...</span>
    <a href="#">Networks</a>
    <a href="#">Terms of Service</a>
    <a href="#">Privacy Policy</a>
  </div>
  <div class="right">
    <a href="#">Support</a>
    <span class="theme-toggle" onclick="toggleTheme()">🌓</span>
    <button>Collector</button>
    <button><strong>Crypto</strong></button>
    <select>
      <option>USD</option>
      <option>EUR</option>
      <option>BTC</option>
    </select>
  </div>
</div>

<script>
  async function fetchPrices() {
    try {
      // ETH price
      const ethRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const ethData = await ethRes.json();
      document.getElementById('eth-price').textContent = `ETH: $${ethData.ethereum.usd.toFixed(2)}`;

      // Gas price
      const gasRes = await fetch('https://etherscan.io/myapikey_logs?apikey=BHU9C9IUHV1QVEX67V2D3JW49VRDMTTDMD');
      const gasData = await gasRes.json();
      document.getElementById('gas-price').textContent = `Gas: ${gasData.result.SafeGasPrice} GWEI`;
    } catch (e) {
      console.error("Error fetching prices", e);
    }
  }

  fetchPrices();
  setInterval(fetchPrices, 30000); // Refresh every 30s

  function toggleTheme() {
    const body = document.body;
    const bar = document.querySelector('.crypto-bar');
    const isDark = body.classList.toggle('light-mode');
    bar.style.backgroundColor = isDark ? '#eee' : '#111';
    bar.style.color = isDark ? '#111' : '#fff';
  }
</script>

</body>
</html>
