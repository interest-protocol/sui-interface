import { FC } from 'react';

import { Layout } from '../componentes';
import { ConfirmationModal } from '../componentes/confirmation-modal';
import LendBalanceInfo from '../componentes/lend-balance-info';

const LendingProtocol: FC = () => (
  <Layout>
    <LendBalanceInfo />
    <ConfirmationModal
      title="Repay"
      borrowLimit={600}
      limitUsed={25}
      inToken={0.0}
      inUSD={0}
    />
  </Layout>
);

export default LendingProtocol;
