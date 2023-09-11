import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import TabsTransition from './components/tabs-transition';
import { LSTProps } from './lst.types';
import LstHeader from './lst-header';
import Portfolio from './portfolio';
import Staked from './staked';
import Stats from './stats';
import Validators from './validators';

const LST: FC<LSTProps> = ({ form }) => {
  const t = useTranslations();
  const [changeTab, setChangeTab] = useState<number>(0);

  return (
    <Layout dashboard titlePage={<LstHeader />}>
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
              capitalize(t('lst.tabs.stake')),
              capitalize(t('lst.tabs.portfolio')),
              capitalize(t('lst.tabs.validators')),
              capitalize(t('lst.tabs.stats')),
            ]}
          />
        </Box>
      </Box>
      <TabsTransition type="fade">
        {
          [
            <Staked form={form} key={v4()} />,
            <Portfolio key={v4()} />,
            <Validators key={v4()} />,
            <Stats key={v4()} />,
          ][changeTab]
        }
      </TabsTransition>
    </Layout>
  );
};

export default LST;
