import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LeftArrowSVG, SUISVG } from '@/components/svg/v2';
import { TimesSVG } from '@/svg';

import { AddPreviewModalProps } from '../earn.types';

const AddPreviewModal: FC<AddPreviewModalProps> = ({ handleClose }) => {
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
          py="m"
          px="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="icon" onClick={handleClose}>
            <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
          <Typography variant="medium" color="text">
            Add Liquidity
          </Typography>
          <Button variant="icon" onClick={handleClose}>
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Box>
        <Box px="1.25rem" py="0.5rem">
          <Box bg="surface" borderRadius="m" mb="1.5rem">
            <Box
              p="1.25rem"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap="1.5rem" alignItems="center">
                <Box
                  bg="primary"
                  color="inverseOnSurface"
                  width="2.5rem"
                  height="2.5rem"
                  minWidth="2.5rem"
                  minHeight="2.5rem"
                  borderRadius=".25rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <SUISVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
                </Box>
                <Typography variant="medium" color="white">
                  BTCB
                </Typography>
              </Box>
              <Box>
                <Typography variant="medium" textAlign="end">
                  0.0000
                </Typography>
                <Typography variant="medium" textAlign="end" color="#ACAAAF">
                  $ 0.000 USD
                </Typography>
              </Box>
            </Box>
            <Box
              as="hr"
              width="70%"
              bg="outline.outlineVariant"
              borderColor="outline.outlineVariant"
              m="0 auto"
            />
            <Box
              p="1.25rem"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap="1.5rem" alignItems="center">
                <Box
                  bg="primary"
                  color="inverseOnSurface"
                  width="2.5rem"
                  height="2.5rem"
                  minWidth="2.5rem"
                  minHeight="2.5rem"
                  borderRadius=".25rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <SUISVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
                </Box>
                <Typography variant="medium" color="white">
                  BTCB
                </Typography>
              </Box>
              <Box>
                <Typography variant="medium" textAlign="end">
                  0.0000
                </Typography>
                <Typography variant="medium" textAlign="end" color="#ACAAAF">
                  $ 0.000 USD
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            bg="surface"
            borderRadius="m"
            display="flex"
            justifyContent="space-between"
            mb="1.5rem"
            color="#ACAAAF"
            p="1.25rem"
          >
            <Typography variant="medium">Fee tier</Typography>
            <Typography variant="medium">0.3 %</Typography>
          </Box>
          <Box width="100%" display="flex" mb="1.25rem">
            <Button
              flex="1"
              size="small"
              variant="filled"
              width="100%"
              textAlign="center"
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Motion>
    </Motion>
  );
};

export default AddPreviewModal;
