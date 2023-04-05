import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { isNil, propOr } from 'ramda';
import { FC, useEffect } from 'react';

import { Container, LoadingPage } from '@/components';
import { COIN_TYPE_TO_COIN, TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import {
  useGetCoinMetadata,
  useLocale,
  useLocalStorage,
  useNetwork,
  useWeb3,
} from '@/hooks';
import { CoinData, LocalTokenMetadataRecord } from '@/interface';
import { FixedPointMath } from '@/sdk';
import { TimesSVG } from '@/svg';
import { getCoinTypeFromSupply, getSafeTotalBalance } from '@/utils';
import { makeToken } from '@/views/dapp/dex-pool-details/dex-pool-details.utils';

import GoBack from '../components/go-back';
import {
  AddLiquidityCard,
  LiquidityDetailsCard,
  RemoveLiquidityCard,
} from './components';
import { IToken } from './components/add-liquidity-card/add-liquidity-card.types';
import { useGetVolatilePool } from './dex-pool-details.hooks';
import { DEXPoolDetailsViewProps } from './dex-pool-details.types';

const DEXPoolDetailsView: FC<DEXPoolDetailsViewProps> = ({
  objectId,
  formAddLiquidity,
  formRemoveLiquidity,
}) => {
  const t = useTranslations();

  const {
    coinsMap,
    isFetchingCoinBalances,
    mutate,
    error: web3Error,
  } = useWeb3();

  const { network } = useNetwork();

  const [localTokens, setLocalTokens] =
    useLocalStorage<LocalTokenMetadataRecord>(
      'sui-interest-tokens-metadata',
      {}
    );

  const {
    error,
    data: volatilePool,
    mutate: updateVolatilePools,
    isLoading,
  } = useGetVolatilePool(objectId);

  const { currentLocale } = useLocale();

  const unsafeToken0 =
    (propOr(
      null,
      volatilePool.token0Type,
      COIN_TYPE_TO_COIN[network]
    ) as CoinData) ?? propOr(null, volatilePool.token0Type, localTokens);

  const unsafeToken1 =
    (propOr(
      null,
      volatilePool.token1Type,
      COIN_TYPE_TO_COIN[network]
    ) as CoinData) ?? propOr(null, volatilePool.token1Type, localTokens);

  const { data: coin0Metadata, error: coin0MetadataError } = useGetCoinMetadata(
    volatilePool.token0Type,
    {
      isPaused: () => !isNil(unsafeToken0),
    }
  );

  const { data: coin1Metadata, error: coin1MetadataError } = useGetCoinMetadata(
    volatilePool.token1Type,
    {
      isPaused: () => !isNil(unsafeToken1),
    }
  );

  const token0 = makeToken(
    volatilePool.token0Type,
    unsafeToken0,
    coin0Metadata
  );

  const token1 = makeToken(
    volatilePool.token1Type,
    unsafeToken1,
    coin1Metadata
  );

  useEffect(() => {
    const localToken0 = localTokens[token0.type];

    if (!localToken0 && !coin0MetadataError)
      setLocalTokens({ ...localTokens, [token0.type]: token0 });

    const localToken1 = localTokens[token1.type];

    if (!localToken1 && !coin1MetadataError)
      setLocalTokens({ ...localTokens, [token1.type]: token1 });
  }, [token0.type, token1.type, coin0MetadataError, coin1MetadataError]);

  if (isLoading) return <LoadingPage />;

  if (error)
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

  const FirstIcon = TOKENS_SVG_MAP[token0.type] ?? DefaultIcon;

  const SecondIcon = TOKENS_SVG_MAP[token1.type] ?? DefaultIcon;

  const addLiquidityTokens: IToken[] = [
    {
      symbol: token0.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1.2rem">
          <FirstIcon width="100%" maxHeight="1.2rem" maxWidth="1.2rem" />
        </Box>
      ),
      balance: getSafeTotalBalance(coinsMap[token0.type]),
      decimals: token0.decimals,
      type: token0.type,
    },
    {
      symbol: token1.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1.2rem">
          <SecondIcon width="100%" maxHeight="1.2rem" maxWidth="1.2rem" />
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
        <Box as="span" display="flex" width="1rem">
          <FirstIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      type: token0.type,
      decimals: token0.decimals,
    },
    {
      symbol: token1.symbol,
      Icon: (
        <Box as="span" display="flex" width="1rem">
          <SecondIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      type: token1.type,
      decimals: token1.decimals,
    },
  ];

  if (web3Error)
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
          {`${token0.symbol}-${token1.symbol} ${t('dexPoolPair.title', {
            currentLocale,
            type: t('common.volatile', { count: 1 }),
          })}`}
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
          formAddLiquidity={formAddLiquidity}
        />
        <RemoveLiquidityCard
          isStable={false}
          lpToken={
            coinsMap[
              getCoinTypeFromSupply(propOr('', 'lpCoin', volatilePool))
            ] || {}
          }
          tokens={removeLiquidityTokens}
          refetch={async () => {
            await Promise.all([updateVolatilePools, mutate]);
          }}
          formRemoveLiquidity={formRemoveLiquidity}
        />
      </Box>
    </Container>
  );
};

export default DEXPoolDetailsView;
