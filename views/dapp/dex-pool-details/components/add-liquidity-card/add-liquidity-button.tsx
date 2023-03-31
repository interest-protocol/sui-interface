import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { isEmpty, prop } from 'ramda';
import { FC, useState } from 'react';

import { incrementTX } from '@/api/analytics';
import { OBJECT_RECORD } from '@/constants';
import { Box, Button } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';
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
}) => {
  const t = useTranslations();
  const { coinsMap, account } = useWeb3();
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const [loading, setLoading] = useState(false);
  const { network } = useNetwork();

  const handleAddLiquidity = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      if (tokens.length !== 2 || isEmpty(coinsMap))
        throw new Error('Error fetching coins data');

      const [token0, token1] = tokens;
      const token0Amount = getValues('token0Amount');
      const token1Amount = getValues('token1Amount');

      if (!+token0Amount || !+token1Amount)
        throw new Error(t('dexPoolPair.error.unableToAdd'));

      setLoading(true);

      const amount0 = FixedPointMath.toBigNumber(
        token0Amount,
        token0.decimals,
        token0.decimals
      ).decimalPlaces(0, BigNumber.ROUND_UP);

      const vector0 = getCoinIds(network, coinsMap, token0.type);
      const vector1 = getCoinIds(network, coinsMap, token1.type);

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

      const transactionBlock = new TransactionBlock();

      transactionBlock.moveCall({
        target: `${objects.PACKAGE_ID}::interface::add_liquidity`,
        typeArguments: [token0.type, token1.type],
        arguments: [
          transactionBlock.object(objects.DEX_STORAGE_VOLATILE),
          transactionBlock.object(objects.DEX_STORAGE_STABLE),
          transactionBlock.pure(vector0),
          transactionBlock.pure(vector1),
          transactionBlock.pure(safeAmount0.toString()),
          transactionBlock.pure(safeAmount1.toString()),
          transactionBlock.pure(true),
          transactionBlock.pure('0'),
        ],
      });

      const tx = await signAndExecuteTransactionBlock({
        transactionBlock,
      });
      await showTXSuccessToast(tx, network);
      incrementTX(account ?? '');
      return;
    } catch {
      throw new Error(t('dexPoolPair.error.failedAdd'));
    } finally {
      setLoading(false);
      await refetch();
    }
  };

  const addLiquidity = () =>
    showToast(handleAddLiquidity(), {
      loading: capitalize(t('common.loading')),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  return (
    <Button
      width="100%"
      display="flex"
      variant="primary"
      disabled={loading}
      alignItems="center"
      justifyContent="center"
      onClick={addLiquidity}
    >
      {capitalize(t('common.add', { isLoading: Number(loading) }))}
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

export default AddLiquidityButton;
