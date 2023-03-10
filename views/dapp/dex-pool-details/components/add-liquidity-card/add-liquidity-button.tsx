import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { isEmpty, prop } from 'ramda';
import { FC } from 'react';

import { incrementTX } from '@/api/analytics';
import {
  DEX_PACKAGE_ID,
  DEX_STORAGE_STABLE,
  DEX_STORAGE_VOLATILE,
} from '@/constants';
import { Box, Button } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  getCoinIds,
  processSafeAmount,
  showToast,
  showTXSuccessToast,
} from '@/utils';

import { AddLiquidityCardButtonProps } from './add-liquidity-card.types';

const AddLiquidityButton: FC<AddLiquidityCardButtonProps> = ({
  tokens,
  refetch,
  getValues,
  loadingAddLiquidityState,
}) => {
  const t = useTranslations();
  const { coinsMap, account } = useWeb3();
  const { signAndExecuteTransaction } = useWalletKit();

  const handleAddLiquidity = async () => {
    try {
      if (tokens.length !== 2 || isEmpty(coinsMap))
        throw new Error('Error fetching coins data');

      const [token0, token1] = tokens;
      const token0Amount = getValues('token0Amount');
      const token1Amount = getValues('token1Amount');

      if (!+token0Amount || !+token1Amount)
        throw new Error(t('dexPoolPair.error.unableToAdd'));

      loadingAddLiquidityState.setLoading(true);

      const amount0 = FixedPointMath.toBigNumber(
        token0Amount,
        token0.decimals,
        token0.decimals
      ).decimalPlaces(0, BigNumber.ROUND_UP);

      const vector0 = getCoinIds(coinsMap, token0.type);
      const vector1 = getCoinIds(coinsMap, token1.type);

      if (!vector0.length || !vector1.length)
        throw new Error(t('dexPoolPair.error.notEnough'));

      const safeAmount0 = processSafeAmount(amount0, token0.type, coinsMap);
      const safeAmount1 = processSafeAmount(
        coinsMap[token1.type].totalBalance,
        token1.type,
        coinsMap
      );

      if (safeAmount0.isZero() || safeAmount1.isZero())
        throw new Error(t('dexPoolPair.error.notEnoughGas'));

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'add_liquidity',
          gasBudget: 9000,
          module: 'interface',
          packageObjectId: DEX_PACKAGE_ID,
          typeArguments: [token0.type, token1.type],
          arguments: [
            DEX_STORAGE_VOLATILE,
            DEX_STORAGE_STABLE,
            vector0,
            vector1,
            safeAmount0.toString(),
            safeAmount1.toString(),
            true,
            '0',
          ],
        },
      });
      await showTXSuccessToast(tx);
      incrementTX(account ?? '');
      return;
    } catch {
      throw new Error(t('dexPoolPair.error.failedAdd'));
    } finally {
      loadingAddLiquidityState.setLoading(false);
      await refetch();
    }
  };

  const addLiquidity = () =>
    showToast(handleAddLiquidity(), {
      loading: `Loading`,
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  return (
    <Button
      width="100%"
      display="flex"
      variant="primary"
      disabled={loadingAddLiquidityState.loading}
      alignItems="center"
      justifyContent="center"
      onClick={addLiquidity}
    >
      {capitalize(
        t('common.add', { isLoading: Number(loadingAddLiquidityState.loading) })
      )}
      {loadingAddLiquidityState.loading && (
        <Box
          ml="M"
          as="span"
          height="1rem"
          alignItems="center"
          display="inline-flex"
          justifyContent="center"
        >
          <LoadingSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Box>
      )}
    </Button>
  );
};

export default AddLiquidityButton;
