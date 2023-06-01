import {
  Box,
  Button,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import {
  DownArrowSVG,
  ETHSVG,
  LeftArrowSVG,
  USDTSVG,
} from '@/components/svg/v2';
import { useNetwork, useProvider, useSDK, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { TimesSVG } from '@/svg';
import {
  createObjectsParameter,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import { getAmountMinusSlippage } from '@/views/dapp/dex/swap/swap.utils';

import { SwapFormPreviewModalProps } from './swap-form-preview.types';

const SwapFormPreviewModal: FC<SwapFormPreviewModalProps> = ({
  closeModal,
  openConfirmModal,
  formSwap,
  formSettings,
  mutate,
  dexMarket,
}) => {
  const t = useTranslations();
  const { account, coinsMap } = useWeb3();

  const [loading, setLoading] = useState(false);
  const { signTransactionBlock } = useWalletKit();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const sdk = useSDK();

  const resetInput = () => {
    formSwap.setValue('from.value', '0.0');
    formSwap.setValue('to.value', '0.0');
  };

  const handleSwap = async () => {
    try {
      setLoading(true);

      const tokenIn = formSwap.getValues('from');
      const tokenOut = formSwap.getValues('to');
      const slippage = formSettings.getValues('slippage');
      const deadline = formSettings.getValues('deadline');

      if (!tokenIn.type || !tokenOut.type)
        throw new Error(t('dexSwap.error.select2Tokens'));

      if (!account) throw new Error(t('error.accountNotFound'));

      if (!+tokenIn.value) throw new Error(t('dexSwap.error.cannotSell0'));

      const amount = FixedPointMath.toBigNumber(
        tokenIn.value,
        tokenIn.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const amountOut = FixedPointMath.toBigNumber(
        tokenOut.value,
        tokenOut.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const minAmountOut = getAmountMinusSlippage(amountOut, slippage);

      const txb = new TransactionBlock();

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: tokenIn.type,
        amount: amount.toString(),
      });

      const swapTxB = await sdk.swap({
        txb,
        coinInList,
        coinInAmount: amount.toString(),
        coinInType: tokenIn.type,
        coinOutType: tokenOut.type,
        coinOutMinimumAmount: minAmountOut.toString(),
        deadline: deadline,
        dexMarkets: dexMarket,
      });

      const { signature, transactionBlockBytes } = await signTransactionBlock({
        transactionBlock: swapTxB,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: { showEffects: true },
        requestType: 'WaitForEffectsCert',
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);
    } catch {
      throw new Error(t('dexSwap.error.failedToSwap'));
    } finally {
      resetInput();
      setLoading(false);
      await mutate();
      openConfirmModal();
    }
  };

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
        <Typography variant="medium">{t('swap.metadata.title')}</Typography>
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
            <Typography variant="medium">
              {t('swap.modal.preview.exchangeRate')}
            </Typography>
            <Typography variant="medium">0.000</Typography>
          </Box>
          <Box
            p="xl"
            display="flex"
            justifyContent="space-between"
            borderBottom="1px solid #1B1B1F"
          >
            <Typography variant="medium">
              {t('swap.modal.preview.networkFee')}
            </Typography>
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
            <Typography variant="medium">
              {t('swap.modal.preview.newQuoteIn')} 00:00
            </Typography>
          </Box>
        </Box>
        <Typography variant="extraSmall" mb="l">
          {t('swap.modal.preview.networkFeesAreSetBy')}
        </Typography>
        <Typography variant="extraSmall">
          {t('swap.modal.preview.FinalAmountMessage')}
        </Typography>
      </Box>
      <Button
        my="2xl"
        size="small"
        variant="filled"
        justifyContent="center"
        onClick={handleSwap}
        disabled={loading}
      >
        {t('swap.modal.preview.confirmSwap')}
      </Button>
    </Box>
  );
};

export default SwapFormPreviewModal;
