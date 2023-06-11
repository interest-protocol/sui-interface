import { Button } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import WalletConnect from './wallet-connect';
import WalletConnected from './wallet-connected';

const Wallet: FC = () => {
  const t = useTranslations();
  const { currentAccount, isConnected, isError, disconnect } = useWalletKit();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isError && !isModalOpen)
    return (
      <Button
        size="small"
        color="error"
        variant="outline"
        borderColor="error"
        onClick={async () => {
          await disconnect().catch();
          setIsModalOpen(true);
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
    <WalletConnect isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
  );
};

export default Wallet;
