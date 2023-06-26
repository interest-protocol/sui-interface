import { DEX_BASE_TOKEN_ARRAY, Network } from '@interest-protocol/sui-sdk';
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
import { FC, useEffect, useState } from 'react';

import { DownArrowSVG, LeftArrowSVG } from '@/components/svg/v2';
import {
  NETWORK_RECORD,
  SUI_EXPLORER_URL,
  SUI_VISION_EXPLORER_URL,
  TOKENS_SVG_MAP_V2,
} from '@/constants';
import { useNetwork, useProvider, useSDK, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { TimesSVG } from '@/svg';
import {
  createObjectsParameter,
  formatDollars,
  formatMoney,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
  ZERO_BIG_NUMBER,
} from '@/utils';

import { getAmountMinusSlippage } from '../../swap.utils';
import { SwapFormPreviewModalProps } from './swap-form-preview.types';

const SwapFormPreviewModal: FC<SwapFormPreviewModalProps> = ({
  mutate,
  formSwap,
  dexMarket,
  closeModal,
  formSettings,
  openFailModal,
  openConfirmModal,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { account, coinsMap } = useWeb3();
  const [priceImpact, setPriceImpact] = useState('0');

  const [loading, setLoading] = useState(false);
  const { signTransactionBlock } = useWalletKit();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const sdk = useSDK();

  const tokenIn = formSwap.getValues('from');
  const tokenOut = formSwap.getValues('to');
  const notEnoughBalance = FixedPointMath.toBigNumber(
    tokenIn.value,
    tokenIn.decimals
  )
    .decimalPlaces(0, BigNumber.ROUND_DOWN)
    .gt(coinsMap[tokenIn.type]?.totalBalance ?? ZERO_BIG_NUMBER);

  const minimumAmount = FixedPointMath.toNumber(
    getAmountMinusSlippage(
      FixedPointMath.toBigNumber(
        tokenOut.value,
        tokenOut.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN),
      formSettings.getValues('slippage')
    ),
    tokenOut.decimals
  );

  useEffect(() => {
    if (+tokenIn.value && minimumAmount) {
      const valueIn = FixedPointMath.toBigNumber(
        +tokenIn.value / 100,
        tokenOut.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      if (valueIn.isZero()) return;

      sdk
        .quoteSwap({
          coinInAmount: valueIn.toString(),
          coinInType: tokenIn.type,
          coinOutType: tokenOut.type,
          markets: dexMarket,
          baseTokens: DEX_BASE_TOKEN_ARRAY[network],
        })
        .then((data) => {
          if (!data) return;

          const amount = FixedPointMath.toNumber(
            FixedPointMath.toBigNumber(data.amount, 0),
            tokenOut.decimals
          );

          const lowSlippageRate =
            FixedPointMath.toNumber(valueIn, tokenIn.decimals) / amount;

          const actualRate = +tokenIn.value / minimumAmount;

          if (actualRate > lowSlippageRate) {
            setPriceImpact(
              (
                ((actualRate - lowSlippageRate) / lowSlippageRate) *
                100
              ).toFixed(2)
            );
          }
        })
        .catch();
    }
  }, [
    tokenIn.value,
    tokenOut.value,
    tokenIn.type,
    tokenOut.type,
    minimumAmount,
  ]);

  const resetInput = () => {
    formSwap.setValue('from.value', '0');
    formSwap.setValue('to.value', '0');
  };

  const handleSwap = async () => {
    try {
      setLoading(true);

      const slippage = formSettings.getValues('slippage');
      const deadline = formSettings.getValues('deadline');

      if (!tokenIn.type || !tokenOut.type)
        throw new Error(t('swap.error.select2Tokens'));

      if (!account) throw new Error(t('error.accountNotFound'));

      if (!+tokenIn.value) throw new Error(t('swap.error.cannotSell0'));

      const isMaxTrade = formSwap.getValues('maxValue');

      const amount = isMaxTrade
        ? coinsMap[tokenIn.type]?.totalBalance ?? ZERO_BIG_NUMBER
        : FixedPointMath.toBigNumber(
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
        network === Network.MAINNET
          ? `${SUI_VISION_EXPLORER_URL}/txblock/${tx.digest}`
          : `${SUI_EXPLORER_URL}/transaction/${tx.digest}?network=${NETWORK_RECORD[network]}`
      );
    } catch {
      openFailModal(t('swap.error.failedToSwap'));
    } finally {
      resetInput();
      setLoading(false);
      await mutate();
    }
  };

  const [FromIcon, ToIcon] = [
    TOKENS_SVG_MAP_V2[tokenIn?.type] ?? TOKENS_SVG_MAP_V2.default,
    TOKENS_SVG_MAP_V2[tokenOut?.type] ?? TOKENS_SVG_MAP_V2.default,
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
          <Typography variant="medium">{t('swap.form.preview')}</Typography>
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
        <Typography variant="medium">
          {t('swap.modal.preview.confirmSwap')}
        </Typography>
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
                  Number(tokenIn?.value || 0) * (tokenIn?.usdPrice || 0)
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
                  Number(tokenOut?.value || 0) * (tokenOut?.usdPrice || 0)
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
              {formatMoney(
                +(+(+tokenOut?.value / +tokenIn?.value).toFixed(
                  6
                )).toPrecision()
              )}{' '}
              {tokenOut.symbol}/{tokenIn.symbol}
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
              ~ {priceImpact}%
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
              {(+minimumAmount.toFixed(6)).toPrecision()} ${tokenOut.symbol}
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
              {(+(+tokenIn.value * 0.003).toFixed(6)).toPrecision()}{' '}
              {tokenIn.symbol}
            </Typography>
          </Box>
        </Box>
        <Typography variant="extraSmall" mb="l">
          {t('swap.modal.preview.footerText')}
        </Typography>
      </Box>
      <Button
        my="2xl"
        size="small"
        variant="filled"
        justifyContent="center"
        onClick={handleSwap}
        nDisabled={{
          bg: 'gray',
        }}
        disabled={loading || notEnoughBalance}
      >
        {t(
          notEnoughBalance
            ? 'swap.modal.preview.notEnoughBalance'
            : 'swap.modal.preview.confirmSwap'
        )}
      </Button>
    </Box>
  );
};

export default SwapFormPreviewModal;
