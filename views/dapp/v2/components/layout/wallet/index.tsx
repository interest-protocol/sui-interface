import { useWalletKit } from '@mysten/wallet-kit';
import { FC } from 'react';

import WalletConnect from './wallet-connect';
import WalletConnected from './wallet-connected';

const Wallet: FC = () => {
  const { currentAccount, isConnected, isError } = useWalletKit();

  if (isError) return <div>error connecting</div>;

  return isConnected && !!currentAccount?.address ? (
    <WalletConnected />
  ) : (
    <WalletConnect />
  );
};

export default Wallet;
