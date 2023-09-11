import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ExchangeRate from '../../components/exchange-rate';
import FAQ from './faq';
import NextEpoch from './next-epoch';
import PricesMarketCard from './prices-market-card';
import { StatisticsProps } from './statistics.type';
import Stats from './stats';

const Statistics: FC<StatisticsProps> = ({
  totalSuiStaked,
  iSuiExchangeRate,
}) => (
  <Box
    width={['100%', '100%', '100%', '55%']}
    display="flex"
    flexDirection="column"
    gap="0.5rem"
  >
    <PricesMarketCard />
    <Stats
      apy="3.5%"
      totalRewards="50 sui"
      totalStaked={totalSuiStaked}
      derivatedSui={[{ name: 'iSui', value: iSuiExchangeRate }]}
    />
    <Box
      gap="s"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <ExchangeRate iSuiExchangeRate={+iSuiExchangeRate} />
      <NextEpoch />
    </Box>
    <FAQ />
  </Box>
);

export default Statistics;
