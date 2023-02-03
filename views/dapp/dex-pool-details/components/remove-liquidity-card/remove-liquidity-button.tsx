import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { DEX_PACKAGE_ID, DEX_STORAGE_VOLATILE } from '@/constants';
import { Button } from '@/elements';
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
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const { signAndExecuteTransaction } = useWalletKit();

  const disabled = isFetching || loading;

  const handleRemoveLiquidity = async () => {
    try {
      if (disabled) return;
      setLoading(true);

      const lpAmount = getLpAmount();

      if (!+lpAmount || !objectIds.length)
        throw new Error('Cannot withdraw 0 lp tokens');

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
      return await showTXSuccessToast(tx);
    } catch (error) {
      throw new Error('failed to remove liquidity');
    } finally {
      setLoading(false);
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
      hover={{ bg: disabled ? 'disabled' : 'errorActive' }}
      bg={disabled ? 'disabled' : 'error'}
      onClick={removeLiquidity}
    >
      {capitalize(t('common.remove', { isLoading: Number(loading) }))}
    </Button>
  );
};

export default RemoveLiquidityButton;
