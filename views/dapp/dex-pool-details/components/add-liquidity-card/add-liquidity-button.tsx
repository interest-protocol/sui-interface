import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { useTranslations } from 'next-intl';
import { isEmpty, prop } from 'ramda';
import { FC, useState } from 'react';

import { Box, Button } from '@/elements';
import { useNetwork, useProvider, useSDK, useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  createObjectsParameter,
  processSafeAmount,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';

import { AddLiquidityCardButtonProps } from './add-liquidity-card.types';

const AddLiquidityButton: FC<AddLiquidityCardButtonProps> = ({
  tokens,
  refetch,
  getValues,
  stable,
}) => {
  const t = useTranslations();
  const { coinsMap } = useWeb3();
  const { signTransactionBlock } = useWalletKit();
  const [loading, setLoading] = useState(false);
  const { network } = useNetwork();
  const { provider } = useProvider();
  const sdk = useSDK();
  const handleAddLiquidity = async () => {
    try {
      if (tokens.length !== 2 || isEmpty(coinsMap))
        throw new Error(t('error.fetchingCoins'));

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

      if (
        !coinsMap[token0.type].objects.length ||
        !coinsMap[token1.type].objects.length
      )
        throw new Error(t('dexPoolPair.error.notEnough'));

      const safeAmount0 = processSafeAmount(amount0, token0.type, coinsMap);
      const safeAmount1 = processSafeAmount(
        coinsMap[token1.type].totalBalance,
        token1.type,
        coinsMap
      );

      if (safeAmount0.isZero() || safeAmount1.isZero())
        throw new Error(t('dexPoolPair.error.notEnoughGas'));

      const txb = new TransactionBlock();

      const vector0 = createObjectsParameter({
        txb,
        type: token0.type,
        coinsMap,
        amount: safeAmount0.toString(),
      });

      const vector1 = createObjectsParameter({
        txb,
        type: token1.type,
        coinsMap,
        amount: safeAmount1.toString(),
      });

      const { signature, transactionBlockBytes } = await signTransactionBlock({
        transactionBlock: sdk.addLiquidity({
          txb,
          stable,
          coinAType: token0.type,
          coinBType: token1.type,
          coinAList: vector0,
          coinBList: vector1,
          coinAAmount: safeAmount0.toString(),
          coinBAmount: safeAmount1.toString(),
        }),
        chain: network,
      });

      const tx = await provider.executeTransactionBlock({
        signature,
        transactionBlock: transactionBlockBytes,
        options: { showEffects: true, showEvents: false },
        requestType: 'WaitForEffectsCert',
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);
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
