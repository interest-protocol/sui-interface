import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import TabsTransition from './components/tabs-transition';
import LSDHeader from './lsd-header';
import Portfolio from './portfolio';
import Staked from './staked';
import Stats from './stats';
import Validators from './validators';

const Tab = [
  <Staked key={v4()} />,
  <Portfolio key={v4()} />,
  <Validators key={v4()} />,
  <Stats key={v4()} />,
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
      <TabsTransition type="fade">{Tab[changeTab]}</TabsTransition>
    </Layout>
  );
};

export default LSD;
