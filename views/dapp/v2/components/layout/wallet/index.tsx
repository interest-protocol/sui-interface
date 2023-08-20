import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useState } from 'react';

import ConnectWallet from '@/components/web3-manager/connect-wallet';

import Profile from '../header/menu/profile';
import WalletConnect from './wallet-connect';

const Wallet: FC = () => {
  const { currentAccount, isConnected } = useWalletKit();
  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  return (
    <>
      <ConnectWallet
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
