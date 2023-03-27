import { and, find, or, pathOr } from 'ramda';

import { Network, RECOMMENDED_POOLS } from '@/constants';

export const getRecommendedPairId = (
  network: Network,
  tokenA: string,
  tokenB: string
): string =>
  pathOr(
    '',
    ['poolObjectId'],
    find(
      ({ token0, token1 }) =>
        or(
          and(token0.type === tokenA, token1.type === tokenB),
          and(token0.type === tokenB, token1.type === tokenA)
        ),
      RECOMMENDED_POOLS[network]
    )
  );
