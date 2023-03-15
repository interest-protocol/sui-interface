import { and, find, or, pathOr, propEq } from 'ramda';

import { RECOMMENDED_POOLS } from '@/constants';

export const getRecommendedPairId = (tokenA: string, tokenB: string): string =>
  pathOr(
    '',
    ['poolObjectId'],
    find(
      or(
        and(propEq('token0', tokenA), propEq('token1', tokenB)),
        and(propEq('token0', tokenB), propEq('token1', tokenA))
      ),
      RECOMMENDED_POOLS
    )
  );
