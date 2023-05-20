import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { incrementTX } from '@/api/analytics';
import { Box, Button } from '@/elements';
import { useNetwork, useProvider, useSDK, useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import {
  noop,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
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
  resetLpAmount,
  stable,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { signTransactionBlock } = useWalletKit();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const sdk = useSDK();

  const [loading, setLoading] = useState(false);

  const disabled = isFetching || loading;

  const handleRemoveLiquidity = async () => {
    try {
      if (disabled) return;

      setLoading(true);

      const lpAmount = getLpAmount();

      if (!+lpAmount || !objectIds.length)
        throw new Error(t('dexPoolPair.error.cannotWithdraw'));

      const txb = new TransactionBlock();

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: sdk.removeLiquidity({
          txb,
          stable,
          coinAType: token0.type,
          coinBType: token1.type,
          lpCoinList: objectIds.map((x) => txb.object(x)),
          lpCoinAmount: new BigNumber(lpAmount)
            .decimalPlaces(0, BigNumber.ROUND_DOWN)
            .toString(),
          coinAMinAmount: token0Amount
            .decimalPlaces(0, BigNumber.ROUND_DOWN)
            .toString(),
          coinBMinAmount: token1Amount
            .decimalPlaces(0, BigNumber.ROUND_DOWN)
            .toString(),
        }),
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: { showEffects: true, showEvents: false },
        requestType: 'WaitForEffectsCert',
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);
      incrementTX(account ?? '');
      return;
    } catch {
      throw new Error(t('dexPoolPair.error.failedRemove'));
    } finally {
      resetLpAmount();
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
      bg={disabled ? 'disabled' : 'error'}
      onClick={disabled ? noop : removeLiquidity}
      cursor={disabled ? 'not-allowed' : 'pointer'}
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
          pointerEvents="none"
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
