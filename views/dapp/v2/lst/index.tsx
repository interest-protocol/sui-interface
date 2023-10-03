import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { findIndex, includes } from 'ramda';
import { FC, PropsWithChildren } from 'react';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';
import { capitalize } from '@/utils';

import LoadingView from '../../components/loading-view';
import { Layout } from '../components';
import TabsTransition from './components/tabs-transition';
import { LSTProvider } from './context';
import { LSTProps } from './lst.types';
import LstHeader from './lst-header';

const links = [
  [Routes[RoutesEnum.LSTStake]],
  [
    Routes[RoutesEnum.LSTBonds],
    Routes[RoutesEnum.LSTBondsRewards],
    Routes[RoutesEnum.LSTBondsStake],
    Routes[RoutesEnum.LSTBondsUnstake],
  ],
  [Routes[RoutesEnum.LSTPortfolio]],
  [Routes[RoutesEnum.LSTValidators], Routes[RoutesEnum.LSTValidatorDetails]],
  [Routes[RoutesEnum.LSTStats]],
];

const LSTLayout: FC<PropsWithChildren<LSTProps>> = ({ loading, children }) => {
  const t = useTranslations();
  const { push, asPath } = useRouter();

  const currentTab = findIndex(
    (link) =>
      includes(asPath.split('?')[0], link) ||
      asPath === Routes[RoutesEnum.LSTStake],
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
              defaultTabIndex={currentTab}
              onChangeTab={(index) =>
                push(links[index]?.[0], undefined, { shallow: true })
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
        <Box variant="container" display="flex" flexDirection="column">
          <TabsTransition type="fade">
            {loading ? <LoadingView /> : children}
          </TabsTransition>
        </Box>
      </LSTProvider>
    </Layout>
  );
};

export default LSTLayout;
