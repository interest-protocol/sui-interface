import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC, useState } from 'react';

import {
  DEX_PACKAGE_ID,
  DEX_STORAGE_STABLE,
  DEX_STORAGE_VOLATILE,
} from '@/constants';
import { Button } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { capitalize, getCoinIds, showTXSuccessToast } from '@/utils';

import { AddLiquidityCardButtonProps } from './add-liquidity-card.types';

const AddLiquidityButton: FC<AddLiquidityCardButtonProps> = ({
  tokens,
  getValues,
  refetch,
}) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  const { coinsMap } = useWeb3();
  const { signAndExecuteTransaction } = useWalletKit();

  const handleAddLiquidity = async () => {
    try {
      if (tokens.length !== 2 || isEmpty(coinsMap))
        throw new Error('Error fetching coins data');

      const [token0, token1] = tokens;
      const token0Amount = getValues('token0Amount');
      const token1Amount = getValues('token1Amount');

      if (!+token0Amount || !+token1Amount)
        throw new Error('Unable to add 0 liquidity');

      setLoading(true);

      const amount0 = FixedPointMath.toBigNumber(
        token0Amount,
        token0.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);
      const amount1 = FixedPointMath.toBigNumber(
        token1Amount,
        token1.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const vector0 = getCoinIds(coinsMap, token0.type);
      const vector1 = getCoinIds(coinsMap, token1.type);

      if (!vector0.length || !vector1.length)
        throw new Error('Not enough coins');

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
            amount0.toString(),
            amount1.toString(),
            true,
            0,
          ],
        },
      });
      return await showTXSuccessToast(tx);
    } catch {
      throw new Error('failed to add liquidity');
    } finally {
      setLoading(false);
      await refetch();
    }
  };

  return (
    <Button
      bg={loading ? 'disabled' : 'accent'}
      width="100%"
      variant="primary"
      disabled={loading}
      hover={{ bg: loading ? 'disabled' : 'accentActive' }}
      onClick={() => {}}
    >
      {capitalize(t('common.add', { isLoading: Number(loading) }))}
    </Button>
  );
};

export default AddLiquidityButton;
