import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG, TimesSVG } from '@/components/svg/v2';

import { WalletConnectResultProps } from './modal.types';

const WalletConnectConfirmModal: FC<WalletConnectResultProps> = ({
  handleClose,
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
      <Box
        py="xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" justifyContent="center" width="100%">
          <Typography variant="title6">
            {t('common.v2.connectWallet.modal.success.title')}
          </Typography>
        </Box>
        <Button variant="icon" onClick={handleClose}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box
        pt="4xl"
        pb="m"
        mb="s"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
        minHeight="12.5rem"
      >
        <Box my="xl" color="success">
          <CheckmarkSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography mt="ml" width="16rem" variant="medium" textAlign="center">
          {t('common.v2.connectWallet.modal.success.description', {
            walletName: walletName,
          })}
          ...
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletConnectConfirmModal;
