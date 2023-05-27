import { Box, TabsNavigator } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../componentes';
import LendDetailsBalanceInfo from '../componentes/lend-details-balance-info';
import BorrowCard from './borrow';
import RepayCard from './repay';

const LendingProtocolDetails: FC = () => {
  return (
    <Layout>
      <LendDetailsBalanceInfo />
      <Box bg="background" p="l">
        <TabsNavigator
          tabs={[
            {
              content: <BorrowCard />,
              label: 'Borrow',
            },
            {
              content: <RepayCard />,
              label: 'Repay',
            },
          ]}
        />
      </Box>
    </Layout>
  );
};

export default LendingProtocolDetails;
