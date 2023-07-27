import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useState } from 'react';

import ConnectWallet from '../../connect-wallet';
import WalletConnect from './wallet-connect';
import WalletConnected from './wallet-connected';

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
        <WalletConnected />
      ) : (
        <WalletConnect setOpenConnectWallet={setOpenConnectWallet} />
      )}
    </>
  );
};

export default Wallet;
