import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import RewardDistribution from './reward-distribution';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background">
      <Box variant="container">
        <RewardDistribution />
      </Box>
    </Box>
  </Layout>
);

export default Liquidity;
