import { FC } from 'react';

import { Layout } from '../componentes';
import LendBalanceInfo from '../componentes/lend-balance-info';

const LendingProtocol: FC = () => (
  <Layout>
    <LendBalanceInfo />
  </Layout>
);

export default LendingProtocol;
