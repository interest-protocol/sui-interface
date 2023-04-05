import { useTranslations } from 'next-intl';
import { FC, useMemo, useState } from 'react';
import { v4 } from 'uuid';

import { Switch } from '@/components';
import { Box, Typography } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';

import { filterPools } from './pool.utils';
import PoolRow from './pool-row';

const Pools: FC = () => {
  const t = useTranslations();
  const { coinsMap } = useWeb3();
  const [isStable, setIsStable] = useState(false);

  const { network } = useNetwork();

  const { active, inactive } = useMemo(
    () => filterPools(network, coinsMap, isStable),
    [coinsMap, network, isStable]
  );

  return (
    <Box pb="L" pt="M" mb="L" px="L" bg="foreground" borderRadius="M">
      <Box
        my="M"
        mb="L"
        display="grid"
        alignItems="center"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <Typography variant="normal">{t('dexPool.recommended')}</Typography>
        <Box display="flex" justifyContent="center">
          <Switch
            thin
            defaultValue={isStable ? 'stable' : 'volatile'}
            options={[
              { value: 'volatile', onSelect: () => setIsStable(false) },
              { value: 'stable', onSelect: () => setIsStable(true) },
            ]}
          />
        </Box>
      </Box>
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
