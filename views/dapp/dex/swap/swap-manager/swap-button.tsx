import { findMarket } from '@interest-protocol/sui-sdk';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { incrementTX } from '@/api/analytics';
import { Box, Button, Typography } from '@/elements';
import { useSDK } from '@/hooks';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  createObjectsParameter,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import { SwapButtonProps } from '../swap.types';
import { getAmountMinusSlippage } from '../swap.utils';

const SwapButton: FC<SwapButtonProps> = ({
  mutate,
  control,
  coinsMap,
  slippage,
  disabled,
  getValues,
  setValue,
  tokenInType,
  tokenOutType,
  poolsMap,
  deadline,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();

  const [loading, setLoading] = useState(false);
  const { signTransactionBlock } = useWalletKit();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const sdk = useSDK();
  const tokenInValue = useWatch({ control, name: 'tokenIn.value' });
  const tokenOutValue = useWatch({ control, name: 'tokenOut.value' });
  const isDisabled =
    disabled ||
    !+tokenInValue ||
    !+tokenOutValue ||
    !findMarket({
      data: poolsMap,
      coinInType: tokenInType,
      coinOutType: tokenOutType,
      network,
    }).length;

  const handleSwap = async () => {
    try {
      if (disabled) return;
      setLoading(true);

      const tokenIn = getValues('tokenIn');
      const tokenOut = getValues('tokenOut');

      if (!tokenIn || !tokenOut)
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
        type: tokenInType,
        amount: amount.toString(),
      });

      const swapTxB = await sdk.swap({
        txb,
        coinInList,
        coinInAmount: amount.toString(),
        coinInType: tokenInType,
        coinOutType: tokenOutType,
        coinOutMinimumAmount: minAmountOut.toString(),
        deadline: deadline,
        dexMarkets: poolsMap,
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

      incrementTX(account ?? '');
      return;
    } catch {
      throw new Error(t('dexSwap.error.failedToSwap'));
    } finally {
      resetInput();
      setLoading(false);
      await mutate();
    }
  };

  const swap = () =>
    showToast(handleSwap(), {
      loading: capitalize(t('common.loading')),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  const resetInput = () => {
    setValue('tokenIn.value', '0.0');
    setValue('tokenOut.value', '0.0');
  };

  return (
    <WalletGuardButton>
      <Button
        mt="L"
        width="100%"
        variant="primary"
        onClick={swap}
        disabled={loading || isDisabled}
        nHover={{
          bg: loading || isDisabled ? 'disabled' : 'accentAlternativeActive',
        }}
        cursor={loading ? 'progress' : isDisabled ? 'not-allowed' : 'pointer'}
        bg={loading || isDisabled ? 'disabled' : 'accentAlternative'}
      >
        {loading ? (
          <Box as="span" display="flex" justifyContent="center">
            <Box as="span" display="inline-block" width="1rem">
              <LoadingSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
            </Box>
            <Typography as="span" variant="normal" ml="M" fontSize="S">
              {capitalize(t('common.loading'))}
            </Typography>
          </Box>
        ) : (
          t('dexSwap.buttonText')
        )}
      </Button>
    </WalletGuardButton>
  );
};

export default SwapButton;
