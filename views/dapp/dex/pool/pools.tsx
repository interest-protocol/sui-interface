import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';

import { filterPools } from './pool.utils';
import PoolRow from './pool-row';

const Pools: FC = () => {
  const { coinsMap } = useWeb3();
  const t = useTranslations();

  const { active, inactive } = useMemo(() => filterPools(coinsMap), [coinsMap]);

  return (
    <Box pb="L" pt="M" mb="L" px="L" bg="foreground" borderRadius="M">
      <Typography variant="normal" mt="L" mb="XL">
        {t('dexPool.recommended')}
      </Typography>
      {!!active.length && (
        <>
          <Typography variant="normal" color="textSecondary" my="L">
            {t('dexPool.activePools')}
          </Typography>
          {active.map(({ token0, token1, poolObjectId, balance, decimals }) => (
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
          ))}
          {!!inactive.length && (
            <Typography variant="normal" color="textSecondary" my="L">
              {t('dexPool.otherPools')}
            </Typography>
          )}
        </>
      )}
      {inactive.map(({ token0, token1, poolObjectId, balance, decimals }) => (
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
      ))}
    </Box>
  );
};

export default Pools;
