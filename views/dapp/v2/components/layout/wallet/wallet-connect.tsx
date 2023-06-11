import { Box, Button } from '@interest-protocol/ui-kit';
import { ConnectModal } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

const WalletConnect: FC = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ConnectModal open={isOpen} onClose={() => setIsOpen(false)} />
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
            onClick={() => setIsOpen(true)}
          >
            {isOpen
              ? t('common.v2.wallet.connecting')
              : t('common.connectWallet')}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WalletConnect;
