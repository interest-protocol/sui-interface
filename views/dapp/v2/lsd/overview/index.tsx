import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { COINS } from '@/constants';

import { DATA_CHART } from './overview.data';
import { SuiPriceInfoProps, TrendInfoProps } from './overview.type';
import PricesMarketCard from './prices-market-card';

const Overview: FC = () => {
  const trendInfo: TrendInfoProps = {
    percentage: 3.4,
    isTrendUp: true,
    daysPast: 45,
  };

  const priceInfo: SuiPriceInfoProps = {
    coin: COINS[Network.TESTNET].SUID,
    amount: 0.943,
  };

  return (
    <Box width={['100%', '100%', '100%', '55%']}>
      <PricesMarketCard
        trendInfo={trendInfo}
        priceInfo={priceInfo}
        chartData={DATA_CHART}
      />
    </Box>
  );
};

export default Overview;
