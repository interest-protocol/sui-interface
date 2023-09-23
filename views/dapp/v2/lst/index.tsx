import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { findIndex } from 'ramda';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';
import { capitalize } from '@/utils';

import LoadingView from '../../components/loading-view';
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

const links = [
  Routes[RoutesEnum.LSTStake],
  Routes[RoutesEnum.LSTBonds],
  Routes[RoutesEnum.LSTPortfolio],
  Routes[RoutesEnum.LSTValidators],
  Routes[RoutesEnum.LSTStats],
];

const TabsContent: FC<{
  changeTab: number;
  stakeForm?: UseFormReturn<StakeForm>;
}> = ({ stakeForm, changeTab }) => (
  <TabsTransition type="fade">
    {
      [
        <Staked form={stakeForm!} key={v4()} />,
        <Bonds key={v4()} />,
        <Portfolio key={v4()} />,
        <Validators key={v4()} />,
        <Stats key={v4()} />,
      ][changeTab]
    }
  </TabsTransition>
);

const LST: FC<LSTProps> = ({ stakeForm, loading }) => {
  const t = useTranslations();
  const { push, asPath } = useRouter();

  const currentTab = findIndex(
    (link) =>
      asPath === link ||
      (asPath === Routes[RoutesEnum.LSTStake] && asPath.includes(link)),
    links
  );

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
              defaultTabIndex={1}
              onChangeTab={(index) =>
                push(links[index], undefined, { shallow: true })
              }
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
        {loading ? (
          <LoadingView />
        ) : (
          <TabsContent stakeForm={stakeForm} changeTab={currentTab} />
        )}
      </LSTProvider>
    </Layout>
  );
};

export default LST;
