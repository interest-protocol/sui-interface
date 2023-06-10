import { FC } from 'react';

import { Layout, LendBalanceInfo, LendTables } from '../components';

const LendingProtocol: FC = () => (
  <Layout>
    <LendBalanceInfo />
    <LendTables />
  </Layout>
);

export default LendingProtocol;
