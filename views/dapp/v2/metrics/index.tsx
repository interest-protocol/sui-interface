import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ActiveWallets from './active-wallets';
import DailyVolume from './daily-volume';
import TopInfoCards from './top-info-cards';
import TopCoinsTable from './top-tables/top-coins-table';
import TopPoolsTable from './top-tables/top-pools-table';
import TotalLiquidity from './total-liquidity';
import TVLPools from './tvl-pools';

const Metrics: FC = () => {
  const t = useTranslations();

  return (
    <Box
      variant="container"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
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
