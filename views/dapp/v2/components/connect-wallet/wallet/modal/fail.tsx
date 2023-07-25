import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import { WalletConnectResultProps } from './modal.types';

const WalletConnectFailModal: FC<WalletConnectResultProps> = ({
  handleClose,
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
      justifyContent="space-between"
      width="100%"
    >
      <Box display="flex" justifyContent="center" width="100%">
        <Typography variant="title6">Connected Failed</Typography>
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
      <Box my="xl" color="error">
        <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
      </Box>
      <Typography mt="ml" width="16rem" variant="medium" textAlign="center">
        You failed to connect this wallet...
      </Typography>
    </Box>
  </Box>
);

export default WalletConnectFailModal;
