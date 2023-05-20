import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import RewardDistributionAdvice from './reward-distribuition-advice';
import RewardDistributionBenefits from './reward-distribution-benefits';
import RewardDistributionHeader from './reward-distribution-header';
import RewardDistributionList from './reward-distribution-list';

const RewardDistribution: FC = () => (
  <Box variant="container">
    <Box gridColumn="1/-1" width="100%" py="4xl" my="4xl">
      <RewardDistributionHeader />
      <RewardDistributionList />
      <RewardDistributionBenefits />
    </Box>
    <RewardDistributionAdvice />
  </Box>
);

export default RewardDistribution;
