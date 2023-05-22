import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { v4 } from 'uuid';

import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { Box, Typography } from '@/elements/index';
import { useNetwork, useWeb3 } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';
import { EmptyBoxSVG } from '@/svg';

import { filterPools, formatLpCoinToPool, isIPXLPCoin } from './pool.utils';
import PoolRow from './pool-row';

const PoolList: FC<{ isRecommended?: boolean; isStable: boolean }> = ({
  isRecommended,
  isStable,
}) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { coins, coinsMap } = useWeb3();

  const tokensMetadataRecord = useReadLocalStorage<LocalTokenMetadataRecord>(
    `${LOCAL_STORAGE_VERSION}-sui-interest-tokens-metadata`
  );

  const lpCoins = coins.filter((coin) => isIPXLPCoin(coin.type, network));

  const myPools = lpCoins
    .map((object) =>
      formatLpCoinToPool({ object, network, tokensMetadataRecord })
    )
    .filter(({ stable }) => stable === isStable);

  const { active, inactive } = useMemo(
    () => filterPools(network, coinsMap, isStable),
    [coinsMap, network, isStable]
  );

  if (!isRecommended)
    return (
      <>
        {myPools.length ? (
          myPools.map(
            ({ token0, token1, poolObjectId, balance, decimals, stable }) => (
              <PoolRow
                key={v4()}
                balance={balance}
                type0={token0.type}
                type1={token1.type}
                decimals={decimals}
                symbol0={token0.symbol}
                symbol1={token1.symbol}
                objectId={poolObjectId}
                stable={stable}
              />
            )
          )
        ) : (
          <Box
            display="flex"
            minHeight="10rem"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <EmptyBoxSVG maxWidth="5rem" maxHeight="5rem" width="100%" />
            <Typography variant="normal" mt="M">
              {t('dexPool.notFound')}
            </Typography>
          </Box>
        )}
      </>
    );

  return (
    <>
      {!!active.length && (
        <>
          <Typography variant="normal" color="textSecondary" my="L">
            {t('dexPool.activePools')}
          </Typography>
          {active.map(
            ({ token0, token1, poolObjectId, balance, decimals, stable }) => (
              <PoolRow
                key={v4()}
                balance={balance}
                type0={token0.type}
                type1={token1.type}
                decimals={decimals}
                symbol0={token0.symbol}
                symbol1={token1.symbol}
                objectId={poolObjectId}
                stable={stable}
              />
            )
          )}
          {!!inactive.length && (
            <Typography variant="normal" color="textSecondary" my="L">
              {t('dexPool.otherPools')}
            </Typography>
          )}
        </>
      )}
      {inactive.map(
        ({ token0, token1, poolObjectId, balance, decimals, stable }) => (
          <PoolRow
            key={v4()}
            balance={balance}
            type0={token0.type}
            type1={token1.type}
            decimals={decimals}
            symbol0={token0.symbol}
            symbol1={token1.symbol}
            objectId={poolObjectId}
            stable={stable}
          />
        )
      )}
    </>
  );
};

export default PoolList;
