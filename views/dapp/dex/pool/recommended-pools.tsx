import { FC } from 'react';
import { v4 } from 'uuid';

import { RECOMMENDED_POOLS } from '@/constants';
import { Box } from '@/elements';

import PoolRow from './pool-row';

const RecommendedPools: FC = () => (
  <Box pb="L" pt="M" mb="L" px="L" bg="foreground" borderRadius="M">
    {RECOMMENDED_POOLS.map(({ token0, token1, poolObjectId }) => (
      <PoolRow
        key={v4()}
        symbol0={token0.symbol}
        symbol1={token1.symbol}
        type0={token0.type}
        type1={token1.type}
        objectId={poolObjectId}
      />
    ))}
  </Box>
);

export default RecommendedPools;
