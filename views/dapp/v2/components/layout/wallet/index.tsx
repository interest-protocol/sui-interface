import { Button } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import WalletConnect from './wallet-connect';
import WalletConnected from './wallet-connected';

const Wallet: FC = () => {
  const t = useTranslations();
  const {
    currentAccount,
    isConnected,
    isError,
    disconnect,
    connect,
    currentWallet,
    wallets,
  } = useWalletKit();

  if (isError)
    return (
      <Button
        size="small"
        color="error"
        variant="outline"
        borderColor="error"
        onClick={async () => {
          await disconnect().catch();
          if (currentWallet?.name || (wallets[0] && wallets[0].name))
            await connect(
              currentWallet ? currentWallet.name : wallets[0].name
            ).catch();
        }}
        textTransform="capitalize"
        nFocus={{ borderColor: 'error' }}
        nHover={{ borderColor: 'error' }}
        nActive={{ borderColor: 'error' }}
      >
        {t('common.v2.wallet.error')}
      </Button>
    );

  return isConnected && !!currentAccount?.address ? (
    <WalletConnected />
  ) : (
    <WalletConnect />
  );
};

export default Wallet;
