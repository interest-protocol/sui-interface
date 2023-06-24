import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';

import { useGetCoinsPrices, useGetDexIpxPrice, useNetwork } from '@/hooks';

import LendTables from '../components/lend-tables';
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

  console.log({ mutate, ipxPriceIsLoading, ipxPriceError });

  // add skeleton
  if (isLoading || priceIsLoading) return <div>loading...</div>;

  // TODO render a custom message for each error type
  if (
    (!isLoading && isEmpty(marketRecord)) ||
    (!isLoading && error) ||
    (!priceIsLoading && priceError) ||
    (!priceIsLoading && isEmpty(priceMap))
  )
    return <div>error getting the markets</div>;

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
        />
        <LimitSection />
        <Box as="hr" borderColor="outline.outlineVariant" />
        <LendTables />
      </Box>
    </Box>
  );
};

export default Lend;
