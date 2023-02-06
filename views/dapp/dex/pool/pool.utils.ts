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

  const poolsWithBalance = RECOMMENDED_POOLS.map((pool) => {
    const activePool = poolsCoinsMap.find(
      ({ type }) =>
        type.includes(`::${pool.token0.symbol}`) &&
        type.includes(`::${pool.token1.symbol}`)
    );

    return {
      ...pool,
      decimals: activePool?.decimals ?? 0,
      balance: activePool?.totalBalance ?? ZERO_BIG_NUMBER,
    };
  });

  const filteredPools = poolsWithBalance.reduce(
    ({ active, inactive }, pool) => {
      if (pool.balance.isEqualTo(ZERO_BIG_NUMBER))
        return {
          active,
          inactive: [...inactive, pool],
        };

      return {
        active: [...active, pool],
        inactive,
      };
    },
    { active: [], inactive: [] } as IPools
  );

  return filteredPools;
};
