import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import { TimesSVG } from '@/svg';
import { capitalize } from '@/utils';

import { AddPreviewModalProps } from '../../../earn.types';

const SuccessModal: FC<AddPreviewModalProps> = ({ handleClose }) => {
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
          justifyContent="space-between"
        >
          <Box />
          <Typography variant="medium" color="text">
            Add Liquidity
          </Typography>
          <Button variant="icon" onClick={handleClose}>
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Box>
        <Box px="1.25rem" py="0.5rem">
          <Box
            pb="xl"
            pt="4xl"
            mb="2rem"
            display="flex"
            borderRadius="m"
            alignItems="center"
            flexDirection="column"
            bg="surface.containerLowest"
          >
            <Box my="xl" color="success">
              <CheckmarkSVG
                filled
                width="100%"
                maxWidth="3rem"
                maxHeight="3rem"
              />
            </Box>
            <Typography
              my="xl"
              width="16rem"
              variant="medium"
              textAlign="center"
            >
              Transaction submitted
            </Typography>
          </Box>
          <Box display="flex" width="100%" flexDirection="column">
            <Button
              size="small"
              width="100%"
              variant="filled"
              boxSizing="border-box"
              justifyContent="center"
              display="flex"
              onClick={handleClose}
            >
              {capitalize('Close')}
            </Button>
            <a target="_blank" rel="noreferrer" href="/" onClick={handleClose}>
              <Button
                size="small"
                mt="0.5rem"
                mb="2xl"
                width="100%"
                variant="text"
                boxSizing="border-box"
                justifyContent="center"
              >
                View on activity
              </Button>
            </a>
          </Box>
        </Box>
      </Motion>
    </Motion>
  );
};

export default SuccessModal;
