import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import LSDHeader from './lsd-header';
import StakedSection from './staked-section';
import StatsSection from './stats-section';
import ValidatorsSection from './validators-section';

const Tab = [
  <StakedSection key={0} />,
  <ValidatorsSection key={1} />,
  <StatsSection key={2} />,
];

const LSD: FC = () => {
  const t = useTranslations();
  const [changeTab, setChangeTab] = useState<number>(0);

  return (
    <Layout dashboard titlePage={<LSDHeader />}>
      <Box variant="container" display="flex" flexDirection="column">
        <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
          <Tabs
            items={[
              capitalize(t('lsd.tabs.stake')),
              capitalize(t('lsd.tabs.validators')),
              capitalize(t('lsd.tabs.stats')),
            ]}
            defaultTabIndex={changeTab}
            onChangeTab={(changeTab) => setChangeTab(changeTab)}
          />
        </Box>
      </Box>
      {Tab[changeTab]}
    </Layout>
  );
};

export default LSD;
