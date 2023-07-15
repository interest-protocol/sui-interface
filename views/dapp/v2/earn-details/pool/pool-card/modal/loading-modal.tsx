import {
  Box,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

const LoadingModal: FC = () => {
  return (
    <Motion
      initial={{ scale: 0.85 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <Motion
        layout
        width="24rem"
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
          py="1.5rem"
          px="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="medium" color="text">
            Add Liquidity
          </Typography>
        </Box>
        <Box px="1.25rem" py="0.5rem">
          <Box
            bg="surface.containerLowest"
            borderRadius="m"
            mb="1.5rem"
            p="2.5rem"
          >
            <Box
              pt="1.5rem"
              display="flex"
              borderRadius="m"
              alignItems="center"
              flexDirection="column"
            >
              <ProgressIndicator variant="loading" />
              <Typography mt="2.5rem" variant="medium" textAlign="center">
                Waiting for confirmation
              </Typography>
              <Typography
                variant="extraSmall"
                textAlign="center"
                color="#77767A"
              >
                Confirm this transaction in your wallet
              </Typography>
            </Box>
          </Box>
        </Box>
      </Motion>
    </Motion>
  );
};

export default LoadingModal;
