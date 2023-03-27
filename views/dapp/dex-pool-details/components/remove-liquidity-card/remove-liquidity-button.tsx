import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { incrementTX } from '@/api/analytics';
import { OBJECT_RECORD } from '@/constants';
import { Box, Button } from '@/elements';
import { useSuiNetwork, useWeb3 } from '@/hooks';
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
}) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { signAndExecuteTransaction } = useWalletKit();
  const [loading, setLoading] = useState(false);
  const { network } = useSuiNetwork();

  const disabled = isFetching || loading;

  const handleRemoveLiquidity = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      if (disabled) return;
      setLoading(true);

      const lpAmount = getLpAmount();

      if (!+lpAmount || !objectIds.length)
        throw new Error(t('dexPoolPair.error.cannotWithdraw'));

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'remove_v_liquidity',
          gasBudget: 9000,
          module: 'interface',
          packageObjectId: objects.PACKAGE_ID,
          typeArguments: [token0.type, token1.type],
          arguments: [
            objects.DEX_STORAGE_VOLATILE,
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
      onClick={removeLiquidity}
      bg={disabled ? 'disabled' : 'error'}
      nHover={{ bg: disabled ? 'disabled' : 'errorActive' }}
    >
      {capitalize(
        t('common.remove', {
          isLoading: Number(loading),
        })
      )}{' '}
      {loading && (
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
