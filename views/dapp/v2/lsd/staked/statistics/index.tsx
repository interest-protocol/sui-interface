import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ExchangeRate from '../../components/exchange-rate';
import FAQ from './faq';
import NextEpoch from './next-epoch';
import PricesMarketCard from './prices-market-card';
import { DATA_CHART } from './statistics.data';
import { SuiPriceInfoProps, TrendInfoProps } from './statistics.type';
import Stats from './stats';

const TREND_INFO: TrendInfoProps = {
  percentage: 3.4,
  isTrendUp: true,
  daysPast: 45,
};

const PRICE_INFO: SuiPriceInfoProps = {
  coin: 'iSui',
  amount: 0.943,
};

const Statistics: FC = () => (
  <Box
    width={['100%', '100%', '100%', '55%']}
    display="flex"
    flexDirection="column"
    gap="0.5rem"
  >
    <PricesMarketCard
      trendInfo={TREND_INFO}
      priceInfo={PRICE_INFO}
      chartData={DATA_CHART}
    />
    <Stats
      apy="100%"
      totalRewards="$100"
      totalStaked="574.23"
      derivatedSui={[
        { name: 'iSui', value: '1.345' },
        { name: 'iSui-PC', value: '1.345' },
        { name: 'iSui-YN', value: '1.345' },
      ]}
    />
    <Box
      gap="s"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <ExchangeRate />
      <NextEpoch />
    </Box>
    <FAQ />
  </Box>
);

export default Statistics;
