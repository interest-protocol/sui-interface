import { SUI_CLOCK_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { incrementTX } from '@/api/analytics';
import { OBJECT_RECORD, STABLE, VOLATILE } from '@/constants';
import { Box, Button } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import { showToast, showTXSuccessToast, throwTXIfNotSuccessful } from '@/utils';
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

  const [loading, setLoading] = useState(false);

  const disabled = isFetching || loading;

  const handleRemoveLiquidity = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      if (disabled) return;
      setLoading(true);

      const lpAmount = getLpAmount();

      if (!+lpAmount || !objectIds.length)
        throw new Error(t('dexPoolPair.error.cannotWithdraw'));

      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.DEX_PACKAGE_ID}::interface::remove_liquidity`,
        typeArguments: [
          stable ? STABLE[network] : VOLATILE[network],
          token0.type,
          token1.type,
        ],
        arguments: [
          txb.object(objects.DEX_CORE_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.makeMoveVec({ objects: objectIds.map((x) => txb.object(x)) }),
          txb.pure(
            new BigNumber(lpAmount)
              .decimalPlaces(0, BigNumber.ROUND_DOWN)
              .toString()
          ),
          txb.pure(
            token0Amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString()
          ),
          txb.pure(
            token1Amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString()
          ),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: txb,
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
