import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { Network, RECOMMENDED_POOLS } from '@/constants';
import { ZERO_BIG_NUMBER } from '@/utils';

import { IPools } from './pool.types';

export const filterPools = (
  network: Network,
  coinsMap: Record<string, Web3ManagerSuiObject>,
  stable: boolean
): IPools =>
  RECOMMENDED_POOLS[network].reduce(
    ({ active, inactive }, pool) => {
      const activePool = coinsMap[pool.lpCoin.type];

      if (pool.stable !== stable) return { active, inactive };

      return activePool
        ? {
            active: [
              ...active,
              {
                ...pool,
                decimals: activePool.decimals,
                balance: activePool.totalBalance,
              },
            ],
            inactive,
          }
        : {
            active,
            inactive: [
              ...inactive,
              { ...pool, decimals: 0, balance: ZERO_BIG_NUMBER },
            ],
          };
    },
    { active: [], inactive: [] } as IPools
  );
