import { FC } from 'react';

import LendBalanceInfo from '@/views/dapp/v2/components/lend-balance-info';

import { Layout } from '../components';

const LendingProtocol: FC = () => (
  <Layout>
    <LendBalanceInfo />
  </Layout>
);

export default LendingProtocol;
