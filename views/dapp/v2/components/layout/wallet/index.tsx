import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useState } from 'react';

import WalletManager from '@/views/dapp/v2/components/layout/wallet/wallet-manager';

import Profile from '../header/menu/profile';
import WalletConnect from './wallet-connect';

const Wallet: FC = () => {
  const { currentAccount, isConnected } = useWalletKit();
  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  return (
    <>
      <WalletManager
        openConnectWallet={openConnectWallet}
        setOpenConnectWallet={setOpenConnectWallet}
      />
      {isConnected && !!currentAccount?.address ? (
        <Profile />
      ) : (
        <WalletConnect setOpenConnectWallet={setOpenConnectWallet} />
      )}
    </>
  );
};

export default Wallet;
