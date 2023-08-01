import { Box, Button } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { WalletProps } from './wallet.types';

const WalletConnect: FC<WalletProps> = ({ setOpenConnectWallet }) => {
  const t = useTranslations();

  return (
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
          onClick={() => setOpenConnectWallet(true)}
        >
          {t('common.v2.wallet.connect')}
        </Button>
      </Box>
    </Box>
  );
};

export default WalletConnect;
