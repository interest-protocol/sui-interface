import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC } from 'react';

import { incrementTX } from '@/api/analytics';
import { DEX_PACKAGE_ID, DEX_STORAGE_VOLATILE } from '@/constants';
import { Box, Button } from '@/elements';
import { useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import { showToast, showTXSuccessToast } from '@/utils';
import { capitalize } from '@/utils';

import { RemoveLiquidityButtonProps } from './remove-liquidity-card.types';

const RemoveLiquidityButton: FC<RemoveLiquidityButtonProps> = ({
  getLpAmount,
  token0Amount,
  token1Amount,
  refetch,
  isFetching,
  objectIds,
  token0,
  token1,
  loadingRemoveLiquidityState,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { signAndExecuteTransaction } = useWalletKit();

  const disabled = isFetching || loadingRemoveLiquidityState.loading;

  const handleRemoveLiquidity = async () => {
    try {
      if (disabled) return;
      loadingRemoveLiquidityState.setLoading(true);

      const lpAmount = getLpAmount();

      if (!+lpAmount || !objectIds.length)
        throw new Error(t('dexPoolPair.error.cannotWithdraw'));

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'remove_v_liquidity',
          gasBudget: 9000,
          module: 'interface',
          packageObjectId: DEX_PACKAGE_ID,
          typeArguments: [token0.type, token1.type],
          arguments: [
            DEX_STORAGE_VOLATILE,
            objectIds as string[],
            new BigNumber(lpAmount)
              .decimalPlaces(0, BigNumber.ROUND_DOWN)
              .toString(),
            token0Amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString(),
            token1Amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString(),
          ],
        },
      });
      await showTXSuccessToast(tx);
      incrementTX(account ?? '');
      return;
    } catch {
      throw new Error(t('dexPoolPair.error.failedRemove'));
    } finally {
      loadingRemoveLiquidityState.setLoading(false);
      await refetch();
    }
  };

  const removeLiquidity = () =>
    showToast(handleRemoveLiquidity(), {
      loading: `Loading`,
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  return (
    <Button
      width="100%"
      variant="primary"
      disabled={disabled}
      onClick={removeLiquidity}
      bg={disabled ? 'disabled' : 'error'}
      hover={{ bg: disabled ? 'disabled' : 'errorActive' }}
    >
      {capitalize(
        t('common.remove', {
          isLoading: Number(loadingRemoveLiquidityState.loading),
        })
      )}{' '}
      {loadingRemoveLiquidityState.loading && (
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

export default RemoveLiquidityButton;
