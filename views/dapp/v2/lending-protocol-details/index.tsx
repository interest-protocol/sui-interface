import { Box, TabsNavigator } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Layout, LendDetailsBalanceInfo } from '../components';
import BorrowCard from './borrow';
import {
  ILendForm,
  LendingProtocolDetailsProps,
} from './lending-protocol.types';
import RepayCard from './repay';

const LendingProtocolDetails: FC<LendingProtocolDetailsProps> = ({ type }) => {
  const t = useTranslations();
  const formLend = useForm<ILendForm>();

  console.log(type, '>>>type');

  return (
    <Layout>
      <LendDetailsBalanceInfo />
      <Box variant="container">
        <Box gridColumn="1/-1" width="100%">
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
                  <RepayCard
                    formLend={formLend}
                    name="repay"
                    balance="21.345"
                  />
                ),
                label: t('common.v2.repay'),
              },
            ]}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default LendingProtocolDetails;
