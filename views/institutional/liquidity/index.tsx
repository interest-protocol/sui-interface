import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import BenefitsLiquidityProvider from './benefits-liquidity-provider';
import RewardDistribution from './reward-distribution';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background">
      <Box variant="container" py={['3.5rem', '3.5rem', '3.5rem', '5rem']}>
        <RewardDistribution />
        <BenefitsLiquidityProvider />
      </Box>
    </Box>
  </Layout>
);
export default Liquidity;
