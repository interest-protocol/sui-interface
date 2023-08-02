import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { WalletConnectLoadingProps } from './modal.types';

const WalletConnectLoadingModal: FC<WalletConnectLoadingProps> = ({
  walletName,
}) => {
  const t = useTranslations();
  return (
    <Box
      px="s"
      width={['100%', '100%', '100%', '24.375rem']}
      display="flex"
      maxHeight="90vh"
      color="onSurface"
      overflow="hidden"
      borderRadius="1rem"
      maxWidth="24.375rem"
      flexDirection="column"
      bg="surface.container"
      boxShadow="0 0 0.313rem #3334"
    >
      <Box py="xl" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="title6">
          {t('common.v2.connectWallet.modal.loading.title')}
        </Typography>
      </Box>
      <Box
        pt="4xl"
        mb="s"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
        height="12.5rem"
      >
        <ProgressIndicator variant="loading" />
        <Typography mt="2xl" width="16rem" variant="medium" textAlign="center">
          {t('common.v2.connectWallet.modal.loading.description', {
            walletName: walletName,
          })}
          ...
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletConnectLoadingModal;
