import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';

import { useGetCoinsPrices, useGetDexIpxPrice, useNetwork } from '@/hooks';

import LendTables from '../components/lend-tables';
import {
  BORROW_MARKET_TABLE_DATA,
  SUPPLY_MARKET_TABLE_DATA,
} from '../components/lend-tables/market-table/market-table-data';
import ErrorPage from '../error';
import { COIN_PRICE_KEYS } from './lend.constants';
import { useGetMoneyMarkets, useGetMoneyMarketStorage } from './lend.hooks';
import LimitSection from './limit-section';
import OverviewSection from './overview-section';

const Lend: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();

  const { data: moneyMarketStorage } = useGetMoneyMarketStorage();

  const {
    data: priceMap,
    error: priceError,
    isLoading: priceIsLoading,
  } = useGetCoinsPrices(COIN_PRICE_KEYS[network]);

  const {
    data: marketRecord,
    isLoading,
    mutate,
    error,
  } = useGetMoneyMarkets(moneyMarketStorage.allMarketKeys);

  const {
    data: ipxPrice,
    isLoading: ipxPriceIsLoading,
    error: ipxPriceError,
  } = useGetDexIpxPrice(priceMap, { refreshInterval: 100000 });

  console.log('>>>>Mutate', {
    mutate,
    ipxPriceIsLoading,
    ipxPriceError,
    marketRecord,
  });

  const loading = isLoading || priceIsLoading;

  // TODO render a custom message for each error type
  if (!isLoading && error)
    return <ErrorPage message="Error getting the Markets" />;

  if (!isLoading && isEmpty(marketRecord))
    return <ErrorPage message="Error getting the Money Market" />;

  if (!isLoading && isEmpty(priceError))
    return <ErrorPage message="Error getting the Coins Prices" />;

  if (!isLoading && isEmpty(priceMap))
    return <ErrorPage message="Error getting Dex Ipx Price" />;

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
          ipxPrice={ipxPrice}
          moneyMarketStorage={moneyMarketStorage}
          priceMap={priceMap}
          marketRecord={marketRecord}
          isLoading={loading}
        />
        <LimitSection isLoading={loading} />
        <Box as="hr" borderColor="outline.outlineVariant" />
        <LendTables
          isLoading={loading}
          supplyMarketData={SUPPLY_MARKET_TABLE_DATA}
          borrowMarketData={BORROW_MARKET_TABLE_DATA}
        />
      </Box>
    </Box>
  );
};

export default Lend;
