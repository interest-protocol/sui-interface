import { Box, Button } from '@interest-protocol/ui-kit';
import { ConnectModal } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { WalletConnectProps } from './wallet.types';

const WalletConnect: FC<WalletConnectProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const t = useTranslations();

  return (
    <>
      {isModalOpen && (
        <ConnectModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Box
        bg="textSoft"
        height="3rem"
        display="flex"
        alignItems="center"
        borderRadius="2.5rem"
        justifyContent="space-between"
      >
        <Box
          fontSize="M"
          width="auto"
          border="none"
          display="inline-flex"
          bg="bottomBackground"
          borderRadius="2.5rem"
        >
          <Button
            size="small"
            variant="filled"
            textTransform="capitalize"
            onClick={() => setIsModalOpen(true)}
          >
            {isModalOpen
              ? t('common.v2.wallet.connecting')
              : t('common.v2.wallet.connect')}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WalletConnect;
