import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import LSDHeader from './lsd-header';
import PortfolioSection from './portfolio-section';
import StakedSection from './staked-section';
import StatsSection from './stats-section';
import ValidatorsSection from './validators-section';

const Tab = [
  <StakedSection key={v4()} />,
  <PortfolioSection key={v4()} />,
  <ValidatorsSection key={v4()} />,
  <StatsSection key={v4()} />,
];

const LSD: FC = () => {
  const t = useTranslations();
  const [changeTab, setChangeTab] = useState<number>(0);

  return (
    <Layout dashboard titlePage={<LSDHeader />}>
      <Box
        display="flex"
        overflowX="auto"
        variant="container"
        flexDirection="column"
      >
        <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
          <Tabs
            defaultTabIndex={changeTab}
            onChangeTab={(changeTab) => setChangeTab(changeTab)}
            items={[
              capitalize(t('lsd.tabs.stake')),
              capitalize(t('lsd.tabs.portfolio')),
              capitalize(t('lsd.tabs.validators')),
              capitalize(t('lsd.tabs.stats')),
            ]}
          />
        </Box>
      </Box>
      {Tab[changeTab]}
    </Layout>
  );
};

export default LSD;
