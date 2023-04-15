import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { incrementTX } from '@/api/analytics';
import { Box, Button, Typography } from '@/elements';
import { useNetwork, useSDK, useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  createObjectsParameter,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import { SwapButtonProps } from '../../swap.types';
import { findMarket, getAmountMinusSlippage } from '../../swap.utils';

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
}) => {
  const t = useTranslations();
  const { account } = useWeb3();

  const [loading, setLoading] = useState(false);
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { network } = useNetwork();
  const sdk = useSDK();

  const tokenInValue = useWatch({ control, name: 'tokenIn.value' });

  const isDisabled =
    disabled ||
    !+tokenInValue ||
    !findMarket({ data: poolsMap, tokenInType, tokenOutType, network }).length;

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

      const transactionBlock = await sdk.swap({
        txb,
        coinInList: createObjectsParameter({
          txb,
          type: tokenIn.type,
          coinsMap,
          amount: amount.toString(),
        }),
        coinInAmount: amount.toString(),
        coinOutMinimumAmount: minAmountOut.toString(),
        coinInType: tokenIn.type,
        coinOutType: tokenOut.type,
        dexMarkets: poolsMap,
      });

      const tx = await signAndExecuteTransactionBlock({
        transactionBlock,
        chain: network,
        requestType: 'WaitForEffectsCert',
        options: { showEffects: true, showInput: true },
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
