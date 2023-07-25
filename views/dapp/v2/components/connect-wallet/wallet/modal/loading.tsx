import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { WalletConnectLoadingProps } from './modal.types';

const WalletConnectLoadingModal: FC<WalletConnectLoadingProps> = ({
  walletName,
}) => (
  <Box
    px="s"
    width="24.375rem"
    display="flex"
    maxHeight="90vh"
    color="onSurface"
    overflow="hidden"
    borderRadius="1rem"
    maxWidth="24.375rem"
    flexDirection="column"
    bg="surface.container"
    boxShadow="0 0 5px #3334"
  >
    <Box
      py="1.225rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="title6">Approve Connection</Typography>
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
        Connecting to {walletName}...
      </Typography>
    </Box>
  </Box>
);

export default WalletConnectLoadingModal;
