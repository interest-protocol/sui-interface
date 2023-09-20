import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import Bonds from './bonds';
import TabsTransition from './components/tabs-transition';
import { LSTProvider } from './context';
import { LSTProps, StakeForm } from './lst.types';
import LstHeader from './lst-header';
import Portfolio from './portfolio';
import Staked from './staked';
import Stats from './stats';
import Validators from './validators';

const TabsContent: FC<{
  changeTab: number;
  stakeForm: UseFormReturn<StakeForm>;
}> = ({ stakeForm, changeTab }) => (
  <TabsTransition type="fade">
    {
      [
        <Staked form={stakeForm} key={v4()} />,
        <Bonds form={stakeForm} key={v4()} />,
        <Portfolio key={v4()} />,
        <Validators key={v4()} />,
        <Stats key={v4()} />,
      ][changeTab]
    }
  </TabsTransition>
);

const LST: FC<LSTProps> = ({ stakeForm }) => {
  const t = useTranslations();
  const [changeTab, setChangeTab] = useState<number>(0);

  return (
    <Layout dashboard titlePage={<LstHeader />}>
      <LSTProvider>
        <Box
          display="flex"
          overflowX="auto"
          overflowY="hidden"
          variant="container"
          flexDirection="column"
        >
          <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
            <Tabs
              key={v4()}
              defaultTabIndex={changeTab}
              onChangeTab={(changeTab) => setChangeTab(changeTab)}
              items={[
                capitalize(t('lst.tabs.stake')),
                capitalize(t('lst.tabs.bonds')),
                capitalize(t('lst.tabs.portfolio')),
                capitalize(t('lst.tabs.validators')),
                capitalize(t('lst.tabs.stats')),
              ]}
            />
          </Box>
        </Box>
        <TabsContent stakeForm={stakeForm} changeTab={changeTab} />
      </LSTProvider>
    </Layout>
  );
};

export default LST;
