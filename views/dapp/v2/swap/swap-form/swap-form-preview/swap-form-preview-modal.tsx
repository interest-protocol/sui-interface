import {
  Box,
  Button,
  ProgressIndicator,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { DownArrowSVG, LeftArrowSVG } from '@/components/svg/v2';
import { NETWORK_RECORD, SUI_EXPLORER_URL, TOKENS_SVG_MAP } from '@/constants';
import { useNetwork, useProvider, useSDK, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { EtherSVG, TimesSVG } from '@/svg';
import {
  createObjectsParameter,
  formatDollars,
  formatMoney,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import { getAmountMinusSlippage } from '@/views/dapp/dex/swap/swap.utils';

import { SwapFormPreviewModalProps } from './swap-form-preview.types';

const SwapFormPreviewModal: FC<SwapFormPreviewModalProps> = ({
  mutate,
  formSwap,
  dexMarket,
  closeModal,
  formSettings,
  openConfirmModal,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
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

  const tokenIn = formSwap.getValues('from');
  const tokenOut = formSwap.getValues('to');

  const handleSwap = async () => {
    try {
      setLoading(true);

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
      openConfirmModal(
        `${SUI_EXPLORER_URL}/transaction/${tx.digest}?network=${NETWORK_RECORD[network]}`
      );
    } catch {
      throw new Error(t('swap.error.failedToSwap'));
    } finally {
      resetInput();
      setLoading(false);
      await mutate();
    }
  };

  const [FromIcon, ToIcon] = [
    TOKENS_SVG_MAP[tokenIn?.type] ?? EtherSVG,
    TOKENS_SVG_MAP[tokenOut?.type] ?? EtherSVG,
  ];

  if (loading)
    return (
      <Box
        px="xl"
        width="100%"
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
        <Box py="m" display="flex" alignItems="center" justifyContent="center">
          <Typography variant="medium">{t('swap.metadata.title')}</Typography>
        </Box>
        <Box
          pt="4xl"
          pb="xl"
          mb="xl"
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
          bg="surface.containerLowest"
        >
          <ProgressIndicator variant="loading" />
          <Typography
            mt="2xl"
            width="16rem"
            variant="medium"
            textAlign="center"
          >
            {t('swap.modal.preview.swappingToken')}
          </Typography>
        </Box>
      </Box>
    );

  return (
    <Box
      px="xl"
      width="100%"
      display="flex"
      maxHeight="90vh"
      color="onSurface"
      overflow="hidden"
      borderRadius="1rem"
      maxWidth="24.375rem"
      bg="surface.container"
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
        <Box bg="surface.containerLowest" borderRadius="m" mb="xl">
          <Box
            p="xl"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="xl">
              <Box>
                <FromIcon
                  maxWidth="2.5rem"
                  maxHeight="2.5rem"
                  width="100%"
                  filled
                />
              </Box>
              <Typography variant="medium" color="">
                {tokenIn.symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color={dark ? 'white' : 'black'}>
                {formatMoney(Number(tokenIn?.value ?? '0'))}
              </Typography>
              <Typography variant="medium" color="#ACAAAF">
                {formatDollars(
                  Number(tokenIn?.value || 0) * tokenIn?.usdPrice || 0
                )}{' '}
                USD
              </Typography>
            </Box>
          </Box>
          <Box
            as="hr"
            mx="4xl"
            border="none"
            borderBottom="1px solid"
            borderColor="outline.outlineVariant"
          />
          <Box display="flex" justifyContent="center" my="-1.25rem">
            <Box
              width="2.5rem"
              height="2.5rem"
              color="onSurface"
              borderRadius="m"
              border="1px solid"
              alignItems="center"
              display="inline-flex"
              justifyContent="center"
              bg="surface.containerLowest"
              borderColor="outline.outlineVariant"
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
                <ToIcon
                  maxWidth="2.5rem"
                  maxHeight="2.5rem"
                  width="100%"
                  filled
                />
              </Box>
              <Typography variant="medium" color="">
                {tokenOut.symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color={dark ? 'white' : 'black'}>
                {formatMoney(Number(tokenOut?.value ?? '0'))}
              </Typography>
              <Typography variant="medium" color="#ACAAAF">
                {formatDollars(
                  Number(tokenOut?.value || 0) * tokenOut?.usdPrice || 0
                )}{' '}
                USD
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box bg="surface.containerLowest" borderRadius="m" mb="xl">
          <Box
            p="xl"
            gap="l"
            display="flex"
            borderBottom="1px solid"
            justifyContent="space-between"
            borderColor="outline.outlineVariant"
          >
            <Typography variant="small">
              {t('swap.modal.preview.exchangeRate')}
            </Typography>
            <Typography variant="medium" whiteSpace="nowrap">
              0.000 {tokenOut.symbol}/{tokenIn.symbol}
            </Typography>
          </Box>
          <Box
            p="xl"
            gap="l"
            display="flex"
            borderBottom="1px solid"
            justifyContent="space-between"
            borderColor="outline.outlineVariant"
          >
            <Typography variant="small">
              {t('swap.modal.preview.priceImpact')}
            </Typography>
            <Typography variant="medium" whiteSpace="nowrap">
              ~ 0%
            </Typography>
          </Box>
          <Box
            p="xl"
            gap="l"
            display="flex"
            borderBottom="1px solid"
            justifyContent="space-between"
            borderColor="outline.outlineVariant"
          >
            <Typography variant="small">
              {t('swap.modal.preview.minimumReceived')}
            </Typography>
            <Typography variant="medium" whiteSpace="nowrap">
              ~ 0%
            </Typography>
          </Box>
          <Box
            py="m"
            px="xl"
            gap="l"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="small">
              {t('swap.modal.preview.liquidityFee')}
            </Typography>
            <Typography variant="medium" whiteSpace="nowrap">
              00:00
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
