import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import ThenSection from '../components/then';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background" color="text" flex="1" textAlign="center">
      <ThenSection />
    </Box>
  </Layout>
);

export default Liquidity;
