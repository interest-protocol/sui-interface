import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useState } from 'react';

import WalletConnect from './wallet-connect';
import WalletConnected from './wallet-connected';

const Wallet: FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { currentAccount } = useWalletKit();

  return isConnected && !!currentAccount?.address ? (
    <WalletConnected setIsConnected={setIsConnected} />
  ) : (
    <WalletConnect setIsConnected={setIsConnected} />
  );
};

export default Wallet;
