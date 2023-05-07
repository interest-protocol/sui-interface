import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import FooterSection from './footer';
import NewsletterSection from './newsletter-section';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background">
      <Box variant="container">
        <Box gridColumn="1/-1" width="100%">
          <NewsletterSection />
          <FooterSection />
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Liquidity;
