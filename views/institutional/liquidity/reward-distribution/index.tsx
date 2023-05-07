import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import RewardDistributionHeader from './reward-distribution-header';
import RewardDistributionList from './reward-distribution-list';

const RewardDistribution: FC = () => (
  <Box
    gridColumn="1/-1"
    width="100%"
    py={['3.5rem', '3.5rem', '3.5rem', '5rem']}
  >
    <RewardDistributionHeader />
    <RewardDistributionList />
  </Box>
);

export default RewardDistribution;
