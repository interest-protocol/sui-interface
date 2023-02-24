import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import {
  DEX_PACKAGE_ID,
  DEX_STORAGE_STABLE,
  DEX_STORAGE_VOLATILE,
} from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG } from '@/svg';
import { capitalize, showToast, showTXSuccessToast } from '@/utils';
import { getCoinIds } from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import { useGetVolatilePools } from '../../swap.hooks';
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
}) => {
  const t = useTranslations();
  const { data } = useGetVolatilePools();
  const [loading, setLoading] = useState(false);
  const { signAndExecuteTransaction } = useWalletKit();

  const tokenInValue = useWatch({ control, name: 'tokenIn.value' });

  const isDisabled =
    disabled ||
    !+tokenInValue ||
    !findMarket(data, tokenInType, tokenOutType).length;

  const handleSwap = async () => {
    try {
      if (disabled) return;
      setLoading(true);

      const tokenIn = getValues('tokenIn');
      const tokenOut = getValues('tokenOut');

      if (!tokenIn || !tokenOut)
        throw new Error(t('dexSwap.error.select2Tokens'));

      if (!+tokenIn.value) throw new Error(t('dexSwap.error.cannotSell0'));

      const path = findMarket(data, tokenIn.type, tokenOut.type);

      if (!path.length) throw new Error(t('dexSwap.error.noMarket'));

      const firstSwapObject = path[0];

      const amount = FixedPointMath.toBigNumber(
        tokenIn.value,
        tokenIn.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const amountOut = FixedPointMath.toBigNumber(
        tokenOut.value,
        tokenOut.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const minAmountOut = getAmountMinusSlippage(amountOut, slippage);

      // no hop swap
      if (!firstSwapObject.baseTokens.length) {
        const tx = await signAndExecuteTransaction({
          kind: 'moveCall',
          data: {
            function: 'swap',
            gasBudget: 9000,
            module: 'interface',
            packageObjectId: DEX_PACKAGE_ID,
            typeArguments: [
              firstSwapObject.tokenInType,
              firstSwapObject.tokenOutType,
            ],
            arguments: [
              DEX_STORAGE_VOLATILE,
              DEX_STORAGE_STABLE,
              getCoinIds(coinsMap, firstSwapObject.tokenInType),
              [],
              amount.toString(),
              '0',
              minAmountOut.toString(),
            ],
          },
        });
        return await showTXSuccessToast(tx);
      }

      // One Hop Swap
      if (firstSwapObject?.baseTokens.length === 1) {
        const tx = await signAndExecuteTransaction({
          kind: 'moveCall',
          data: {
            function: 'one_hop_swap',
            gasBudget: 9000,
            module: 'interface',
            packageObjectId: DEX_PACKAGE_ID,
            typeArguments: [
              firstSwapObject.tokenInType,
              firstSwapObject.tokenOutType,
              firstSwapObject.baseTokens[0],
            ],
            arguments: [
              DEX_STORAGE_VOLATILE,
              DEX_STORAGE_STABLE,
              getCoinIds(coinsMap, firstSwapObject.tokenInType),
              [],
              amount.toString(),
              '0',
              minAmountOut.toString(),
            ],
          },
        });
        return await showTXSuccessToast(tx);
      }

      throw new Error(t('dexSwap.error.soonFeature'));
    } catch (error) {
      throw new Error(t('dexSwap.error.failedToSwap'));
    } finally {
      resetInput();
      setLoading(false);
      await mutate();
    }
  };

  const swap = () =>
    showToast(handleSwap(), {
      loading: `Loading`,
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
        hover={{
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
