import { values } from 'ramda';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { RECOMMENDED_POOLS } from '@/constants';
import { ZERO_BIG_NUMBER } from '@/utils';

import { IPools } from './pool.types';

export const filterPools = (
  coinsMap: Record<string, Web3ManagerSuiObject>
): IPools => {
  const poolsCoinsMap = values(coinsMap).filter(({ type }) =>
    type.includes('LPCoin')
  );

  const filteredPools = RECOMMENDED_POOLS.reduce(
    ({ active, inactive }, pool) => {
      const activePool = poolsCoinsMap.find(
        ({ type }) =>
          type.includes(`::${pool.token0.symbol}`) &&
          type.includes(`::${pool.token1.symbol}`)
      );

      if (!activePool)
        return {
          active,
          inactive: [
            ...inactive,
            { ...pool, decimals: 0, balance: ZERO_BIG_NUMBER },
          ],
        };

      return {
        active: [
          ...active,
          {
            ...pool,
            decimals: activePool.decimals,
            balance: activePool.totalBalance,
          },
        ],
        inactive,
      };
    },
    { active: [], inactive: [] } as IPools
  );

  return filteredPools;
};
