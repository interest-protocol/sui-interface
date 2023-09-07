import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import DetailsCard from './details-card';
import ExchangeRate from './exchange-rate';
import { DATA_CHART } from './overview.data';
import { SuiPriceInfoProps, TrendInfoProps } from './overview.type';
import PricesMarketCard from './prices-market-card';
import Stats from './stats';

const Overview: FC = () => {
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
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={['0.5rem', '0.5rem', '0.5rem', 'unset']}
        mb="m"
      >
        <ExchangeRate
          exchangeRateData={[
            [
              { coin: 'iSui', amount: 1 },
              { coin: 'Sui', amount: 1 },
            ],
            [
              { coin: 'iSui-PC', amount: 1 },
              { coin: 'Sui', amount: 1 },
            ],
          ]}
        />
        <DetailsCard validatorNumbers={90} hasRewards />
      </Box>
    </Box>
  );
};

export default Overview;
