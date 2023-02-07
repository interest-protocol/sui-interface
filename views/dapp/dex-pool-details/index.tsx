import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { pathOr, propOr } from 'ramda';
import { FC } from 'react';

import { Container } from '@/components';
import { POOL_METADATA_MAP, PoolMetadata, TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import { useLocale, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { TimesSVG } from '@/svg';
import { getCoinTypeFromSupply, getSafeTotalBalance } from '@/utils';

import GoBack from '../components/go-back';
import {
  AddLiquidityCard,
  LiquidityDetailsCard,
  RemoveLiquidityCard,
} from './components';
import { IToken } from './components/add-liquidity-card/add-liquidity-card.types';
import { useGetVolatilePool } from './dex-pool-details.hooks';
import { DEXPoolDetailsViewProps } from './dex-pool-details.types';

const DEXPoolDetailsView: FC<DEXPoolDetailsViewProps> = ({ objectId }) => {
  const t = useTranslations();

  const {
    coinsMap,
    isFetchingCoinBalances,
    mutate,
    error: web3Error,
  } = useWeb3();
  const {
    error,
    data: volatilePool,
    mutate: updateVolatilePools,
  } = useGetVolatilePool(objectId);

  const { currentLocale } = useLocale();

  const poolMetadata: PoolMetadata | null = pathOr(
    null,
    [Network.DEVNET, objectId],
    POOL_METADATA_MAP
  );

  if (!poolMetadata)
    return (
      <Box
        my="XXXL"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box color="error">
          <TimesSVG width="10rem" maxHeight="10rem" maxWidth="10rem" />
        </Box>
        <Typography variant="normal">
          {t('dexPoolPair.error.pairDoesNotExist', { objectId })}
        </Typography>
      </Box>
    );

  const DefaultIcon = TOKENS_SVG_MAP.default;

  const { token0, token1 } = poolMetadata as PoolMetadata;

  const FirstIcon = TOKENS_SVG_MAP[token0.type] ?? DefaultIcon;

  const SecondIcon = TOKENS_SVG_MAP[token1.type] ?? DefaultIcon;

  const addLiquidityTokens: IToken[] = [
    {
      symbol: token0.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1rem">
          <FirstIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      balance: getSafeTotalBalance(coinsMap[token0.type]),
      decimals: token0.decimals,
      type: token0.type,
    },
    {
      symbol: token1.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1rem">
          <SecondIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      balance: getSafeTotalBalance(coinsMap[token1.type]),
      decimals: token1.decimals,
      type: token1.type,
    },
  ];

  const removeLiquidityTokens = [
    {
      symbol: token0.symbol,
      Icon: (
        <Box as="span" display="inline-block" width="1rem">
          <FirstIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      type: token0.type,
      decimals: token0.decimals,
    },
    {
      symbol: token1.symbol,
      Icon: (
        <Box as="span" display="inline-block" width="1rem">
          <SecondIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      type: token1.type,
      decimals: token1.decimals,
    },
  ];

  if (error || web3Error)
    return (
      <Box
        my="XXXL"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box color="error">
          <TimesSVG width="10rem" maxHeight="10rem" maxWidth="10rem" />
        </Box>
        <Typography variant="normal">
          {t('dexPoolPair.error.pairData')}
        </Typography>
      </Box>
    );

  return (
    <Container dapp mt="XXL" width="100%">
      <GoBack routeBack />
      <Box display="flex" alignItems="center">
        <FirstIcon width="2rem" maxHeight="2rem" maxWidth="2rem" />
        <SecondIcon width="2rem" maxHeight="2rem" maxWidth="2rem" />
        <Typography variant="normal" ml="L" textTransform="capitalize">
          {token0.symbol +
            ' - ' +
            token1.symbol +
            ' ' +
            t('dexPoolPair.title', {
              currentLocale,
              type: t('common.volatile', { count: 1 }),
            })}
        </Typography>
      </Box>
      <Box
        mt="XL"
        color="text"
        display="grid"
        gridGap="1rem"
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
      >
        <LiquidityDetailsCard
          isStable={false}
          lines={[
            {
              type: token0.type,
              symbol: token0.symbol,
              value: FixedPointMath.toNumber(
                new BigNumber(volatilePool.token0Balance),
                token0.decimals
              ).toString(),
            },
            {
              type: token1.type,
              symbol: token1.symbol,
              value: FixedPointMath.toNumber(
                new BigNumber(volatilePool.token1Balance),
                token1.decimals
              ).toString(),
            },
          ]}
        />
        <AddLiquidityCard
          fetchingInitialData={isFetchingCoinBalances}
          tokens={addLiquidityTokens}
          pool={volatilePool}
          refetch={async () => {
            await Promise.all([updateVolatilePools, mutate]);
          }}
        />
        <RemoveLiquidityCard
          isStable={false}
          lpToken={
            coinsMap[
              getCoinTypeFromSupply(propOr('', 'lpCoinType', volatilePool))
            ] || {}
          }
          tokens={removeLiquidityTokens}
          refetch={async () => {
            await Promise.all([updateVolatilePools, mutate]);
          }}
        />
      </Box>
    </Container>
  );
};

export default DEXPoolDetailsView;
