import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ClaimRewardsProps } from './claim-rewards.types';
import BondsClaimRewardsMaturity from './maturity';
import NonRewards from './non-rewards';
import BondsClaimRewardsTransactionSummary from './transaction-summary';

const MATURITY_LIST = [
  {
    date: '30 • Dec • 2027',
    amount: '0.5532',
    id: '1',
  },
  {
    date: '31 • Dec • 2028',
    amount: '0.3433',
    id: '2',
  },
  {
    date: '17 • Jun • 2028',
    amount: '0.9234',
    id: '3',
  },
];

const BondsClaimRewards: FC<ClaimRewardsProps> = ({ hasRewards, form }) =>
  hasRewards ? (
    <NonRewards />
  ) : (
    <Box
      gap="l"
      flexDirection="column"
      gridTemplateColumns="3fr 2fr"
      display={['flex', 'flex', 'flex', 'grid']}
    >
      <BondsClaimRewardsMaturity form={form} maturityList={MATURITY_LIST} />
      <BondsClaimRewardsTransactionSummary form={form} />
    </Box>
  );

export default BondsClaimRewards;
