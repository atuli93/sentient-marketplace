import { ConnectButton } from '@rainbow-me/rainbowkit';
import { darkTheme } from '@rainbow-me/rainbowkit';

<ConnectButton
  chainStatus="icon"
  showBalance={false}
  accountStatus="address"
  theme={darkTheme({
    accentColor: '#f26486',          // Pink
    accentColorForeground: '#ffffff', // Text color
    borderRadius: 'large',
    overlayBlur: 'small',
  })}
/>
