import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import LSDHeader from './lsd-header';
import StakedSection from './staked-section';
import StatsSection from './stats-section';

const LSD: FC = () => {
  const [changeTab, setChangeTab] = useState<number>(0);
  const t = useTranslations();
  return (
    <Layout dashboard titlePage={<LSDHeader />}>
      <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
        <Tabs
          items={[
            capitalize(t('lsd.tabs.stake')),
            capitalize(t('lsd.tabs.stats')),
          ]}
          defaultTabIndex={changeTab}
          onChangeTab={(changeTab) => setChangeTab(changeTab)}
        />
      </Box>
      {changeTab === 0 ? <StakedSection /> : <StatsSection />}
    </Layout>
  );
};

export default LSD;
