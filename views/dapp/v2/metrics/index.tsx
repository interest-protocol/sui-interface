import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ActiveWallets from './active-wallets';
import DailyVolume from './daily-volume';
import TopCoinsTable from './tables/top-coins-table';
import TopPoolsTable from './tables/top-pools-table';
import TopInfoCards from './top-info-cards';
import TotalLiquidity from './total-liquidity';
import TVLPools from './tvl-pools';

const Metrics: FC = () => {
  const t = useTranslations();
  return (
    <Box width="100%" variant="container">
      <Box
        pb="l"
        width="100%"
        gridColumn="1/-1"
        borderBottom=".0625rem solid"
        borderColor="outline.outlineVariant"
      >
        <Tabs items={[t('metrics.tabs.dex')]} />
      </Box>
      <TopInfoCards />
      <TotalLiquidity />
      <DailyVolume />
      <ActiveWallets />
      <TVLPools />
      <TopPoolsTable />
      <TopCoinsTable />
    </Box>
  );
};

export default Metrics;
