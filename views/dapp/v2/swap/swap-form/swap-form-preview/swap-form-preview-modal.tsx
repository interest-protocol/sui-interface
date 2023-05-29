import {
  Box,
  Button,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  DownArrowSVG,
  ETHSVG,
  LeftArrowSVG,
  USDTSVG,
} from '@/components/svg/v2';
import { TimesSVG } from '@/svg';

import { SwapFormPreviewModalProps } from './swap-form-preview.types';

const SwapFormPreviewModal: FC<SwapFormPreviewModalProps> = ({
  closeModal,
  openConfirmModal,
}) => {
  return (
    <Box
      px="xl"
      bg="#1F1F23"
      width="100%"
      display="flex"
      color="#C7C6CA"
      maxHeight="90vh"
      overflow="hidden"
      borderRadius="1rem"
      maxWidth="24.375rem"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
    >
      <Box
        py="m"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button variant="icon" onClick={closeModal}>
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Typography variant="medium">Swap</Typography>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box overflowY="auto" mx="-0.5rem" px="0.5rem">
        <Box bg="#0D0E11" borderRadius="m" mb="xl">
          <Box
            p="xl"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="xl">
              <Box>
                <ETHSVG
                  maxWidth="2.5rem"
                  maxHeight="2.5rem"
                  width="100%"
                  filled
                />
              </Box>
              <Typography variant="medium" color="">
                ETH
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color="#FFF">
                0.000
              </Typography>
              <Typography variant="medium" color="#ACAAAF">
                $ 0.000 USD
              </Typography>
            </Box>
          </Box>
          <Box as="hr" mx="4xl" borderColor="#45464F" />
          <Box display="flex" justifyContent="center" my="-1.25rem">
            <Box
              bg="#0D0E11"
              width="2.5rem"
              height="2.5rem"
              cursor="pointer"
              borderRadius="m"
              border="1px solid"
              alignItems="center"
              display="inline-flex"
              borderColor="#45464F"
              justifyContent="center"
            >
              <DownArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
            </Box>
          </Box>
          <Box
            p="xl"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="xl">
              <Box>
                <USDTSVG
                  maxWidth="2.5rem"
                  maxHeight="2.5rem"
                  width="100%"
                  filled
                />
              </Box>
              <Typography variant="medium" color="">
                USDT
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color="#FFF">
                0.000
              </Typography>
              <Typography variant="medium" color="#ACAAAF">
                $ 0.000 USD
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box bg="#0D0E11" borderRadius="m" mb="xl">
          <Box
            p="xl"
            display="flex"
            justifyContent="space-between"
            borderBottom="1px solid #1B1B1F"
          >
            <Typography variant="medium">Exchange Rate</Typography>
            <Typography variant="medium">0.000</Typography>
          </Box>
          <Box
            p="xl"
            display="flex"
            justifyContent="space-between"
            borderBottom="1px solid #1B1B1F"
          >
            <Typography variant="medium">Network Fee</Typography>
            <Typography variant="medium">~ 0%</Typography>
          </Box>
          <Box
            py="m"
            px="xl"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex">
              <ProgressIndicator size={30} variant="loading" />
            </Box>
            <Typography variant="medium">New quote in 00:00</Typography>
          </Box>
        </Box>
        <Typography variant="extraSmall" mb="l">
          Network fees are set by “@network name”. Learn more about fees.
        </Typography>
        <Typography variant="extraSmall">
          Final amount may change due to market activity. By approving this Swap
          you agree to Interest protocol Refund Policy
        </Typography>
      </Box>
      <Button
        my="2xl"
        size="small"
        variant="filled"
        justifyContent="center"
        onClick={openConfirmModal}
      >
        Confirm Swap
      </Button>
    </Box>
  );
};

export default SwapFormPreviewModal;
