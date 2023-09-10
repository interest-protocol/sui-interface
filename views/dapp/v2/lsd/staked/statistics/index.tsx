import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import FAQ from './faq';
import PricesMarketCard from './prices-market-card';
import { DATA_CHART } from './statistics.data';
import { SuiPriceInfoProps, TrendInfoProps } from './statistics.type';
import Stats from './stats';

const Statistics: FC = () => {
  const trendInfo: TrendInfoProps = {
    percentage: 3.4,
    isTrendUp: true,
    daysPast: 45,
  };

  const priceInfo: SuiPriceInfoProps = {
    coin: 'iSui',
    amount: 0.943,
  };

  return (
    <Box
      width={['100%', '100%', '100%', '55%']}
      display="flex"
      flexDirection="column"
      gap="0.5rem"
    >
      <PricesMarketCard
        trendInfo={trendInfo}
        priceInfo={priceInfo}
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
      <FAQ />
    </Box>
  );
};

export default Statistics;
