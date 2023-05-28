import { Box, TabsNavigator } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Layout } from '../componentes';
import LendDetailsBalanceInfo from '../componentes/lend-details-balance-info';
import BorrowCard from './borrow';
import { ILendForm } from './lending-protocol.types';
import RepayCard from './repay';

const LendingProtocolDetails: FC = () => {
  const t = useTranslations();
  const formLend = useForm<ILendForm>();
  return (
    <Layout>
      <LendDetailsBalanceInfo />
      <Box bg="background" p="l">
        <TabsNavigator
          tabs={[
            {
              content: (
                <BorrowCard
                  formLend={formLend}
                  name="borrow"
                  balance="21.345"
                />
              ),
              label: t('common.v2.borrow'),
            },
            {
              content: (
                <RepayCard formLend={formLend} name="repay" balance="21.345" />
              ),
              label: t('common.v2.repay'),
            },
          ]}
        />
      </Box>
    </Layout>
  );
};

export default LendingProtocolDetails;
