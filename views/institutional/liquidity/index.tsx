import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import ShareSection from './share-section';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background">
      <Box variant="container">
        <ShareSection />
      </Box>
    </Box>
  </Layout>
);
export default Liquidity;
