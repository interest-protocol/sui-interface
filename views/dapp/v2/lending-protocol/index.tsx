import { FC } from 'react';

import { Layout, LendBalanceInfo, LendTables } from '../componentes';

const LendingProtocol: FC = () => (
  <Layout>
    <LendBalanceInfo />
    <LendTables />
  </Layout>
);

export default LendingProtocol;
