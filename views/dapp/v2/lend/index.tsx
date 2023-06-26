import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';

import { useGetCoinsPrices, useGetDexIpxPrice, useNetwork } from '@/hooks';
import { calculateUserBalancesInUSD } from '@/views/dapp/v2/lend/lend.utils';

import ErrorPage from '../error';
import { COIN_PRICE_KEYS } from './lend.constants';
import { useGetMoneyMarkets, useGetMoneyMarketStorage } from './lend.hooks';
import LendTables from './lend-tables';
import LimitSection from './limit-section';
import OverviewSection from './overview-section';

const Lend: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();

  const {
    data: moneyMarketStorage,
    isLoading: moneyMarketIsLoading,
    error: moneyMarketError,
  } = useGetMoneyMarketStorage();

  const {
    data: priceMap,
    error: priceError,
    isLoading: priceIsLoading,
  } = useGetCoinsPrices(COIN_PRICE_KEYS[network]);

  const { data: marketRecord, isLoading, mutate, error } = useGetMoneyMarkets();

  const {
    data: ipxPrice,
    isLoading: ipxPriceIsLoading,
    error: ipxPriceError,
  } = useGetDexIpxPrice(priceMap, { refreshInterval: 100000 });

  console.log('>>>>Mutate', {
    mutate,
  });

  const loading =
    isLoading || priceIsLoading || ipxPriceIsLoading || moneyMarketIsLoading;

  // TODO render a custom message for each error type
  if (!isLoading && error)
    return <ErrorPage message="Error getting the Markets" />;

  if (!isLoading && isEmpty(marketRecord))
    return <ErrorPage message="Error getting the Money Market" />;

  if (!isLoading && isEmpty(priceError))
    return <ErrorPage message="Error getting the Coins Prices" />;

  if (!isLoading && isEmpty(priceMap))
    return <ErrorPage message="Error getting the Coins Prices" />;

  if (!isLoading && ipxPriceError)
    return <ErrorPage message="Error getting the IPX price" />;

  if (!isLoading && moneyMarketError)
    return (
      <ErrorPage message="Error fetching the Money Market Storage Object" />
    );

  const userBalancesInUSD = calculateUserBalancesInUSD({
    priceMap,
    marketRecord,
    ipxPrice,
    moneyMarketStorage,
  });

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box pb="1rem" width="100%" gridColumn="1/-1">
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('common.v2.lend.title')}
        </Typography>
        <OverviewSection
          userBalancesInUSD={userBalancesInUSD}
          isLoading={loading}
        />
        <LimitSection
          isLoading={loading}
          userBalancesInUSD={userBalancesInUSD}
        />
        <Box as="hr" borderColor="outline.outlineVariant" />
        <LendTables
          isLoading={loading}
          userBalancesInUSD={userBalancesInUSD}
          marketRecord={marketRecord}
          moneyMarketStorage={moneyMarketStorage}
          priceMap={priceMap}
        />
      </Box>
    </Box>
  );
};

export default Lend;
