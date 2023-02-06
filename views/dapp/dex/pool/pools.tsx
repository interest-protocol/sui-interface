import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { EmptyBoxSVG } from '@/svg';

import { filterPools } from './pool.utils';
import PoolRow from './pool-row';

const Pools: FC<{ isRecommended: boolean }> = ({ isRecommended }) => {
  const { coinsMap } = useWeb3();

  const filteredPools = filterPools(coinsMap, isRecommended);

  return (
    <Box pb="L" pt="M" mb="L" px="L" bg="foreground" borderRadius="M">
      <Typography variant="normal" mt="L" mb="XL">
        {isRecommended ? 'Recommended Pools' : 'My Pools'}
      </Typography>
      {filteredPools.map(
        ({ token0, token1, poolObjectId, balance, decimals }) => (
          <PoolRow
            key={v4()}
            balance={balance}
            type0={token0.type}
            type1={token1.type}
            decimals={decimals}
            symbol0={token0.symbol}
            symbol1={token1.symbol}
            objectId={poolObjectId}
          />
        )
      )}
      {!filteredPools.length && (
        <Box color="textSecondary" p="XXL" textAlign="center">
          <EmptyBoxSVG
            maxHeight="5rem"
            maxWidth="5rem"
            width="100%"
            height="100%"
          />
          <Typography variant="normal" mt="L">
            No pools available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Pools;
