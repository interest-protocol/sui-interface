import { Box, Tabs } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { Layout } from '../components';
import LSDHeader from './lsd-header';
import StakedSection from './staked-section';
import StatsSection from './stats-section';

const LSD: FC = () => {
  const [changeTab, setChangeTab] = useState<number>(0);

  return (
    <Layout dashboard titlePage={<LSDHeader />}>
      <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
        <Tabs
          items={['Stake', 'Stats']}
          defaultTabIndex={changeTab}
          onChangeTab={(changeTab) => setChangeTab(changeTab)}
        />
      </Box>
      {changeTab === 0 ? <StakedSection /> : <StatsSection />}
    </Layout>
  );
};

export default LSD;
