import {
  Box,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LoadingModalProps } from './collateral-modal.types';

const LoadingModal: FC<LoadingModalProps> = ({ title, content }) => {
  return (
    <Motion
      layout
      width={['90vw', '90vw', '90vw', '24.375rem']}
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <Box
        p="1.65rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="medium">{title}</Typography>
      </Box>
      <Box
        pt="4xl"
        pb="xl"
        mb="xl"
        mx="xl"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
      >
        <ProgressIndicator variant="loading" />
        <Typography mt="2xl" width="16rem" variant="medium" textAlign="center">
          {content}
        </Typography>
      </Box>
    </Motion>
  );
};

export default LoadingModal;
