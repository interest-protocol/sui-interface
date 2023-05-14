import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { REWARD_DISTRIBUTION_BENEFITS_LIST } from './reward-distribution-benefits.data';
import BenefitsLiquidityCard from './reward-distribution-benefits-card';

const RewardDistributionBenefits: FC = () => (
  <Box
    display="grid"
    gap="0.5rem"
    gridTemplateColumns={[
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ]}
  >
    {REWARD_DISTRIBUTION_BENEFITS_LIST.map((benefit) => (
      <BenefitsLiquidityCard {...benefit} key={v4()} />
    ))}
  </Box>
);

export default RewardDistributionBenefits;
