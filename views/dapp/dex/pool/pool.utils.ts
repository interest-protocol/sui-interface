import { values } from 'ramda';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { RECOMMENDED_POOLS } from '@/constants';
import { ZERO_BIG_NUMBER } from '@/utils';

export const filterPools = (
  coinsMap: Record<string, Web3ManagerSuiObject>,
  isActive: boolean
) => {
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

  const filteredPools = poolsWithBalance.filter(({ balance }) =>
    isActive
      ? !balance.isEqualTo(ZERO_BIG_NUMBER)
      : balance.isEqualTo(ZERO_BIG_NUMBER)
  );

  return filteredPools;
};
