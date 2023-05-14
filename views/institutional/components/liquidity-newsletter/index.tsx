import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NewsletterForm from './liquidity-newsletter-form';
import NewsletterHeader from './liquidity-newsletter-header';

const LiquidityNewsletter: FC = () => (
  <Box variant="container">
    <Box
      display="flex"
      gridColumn="1/-1"
      flexDirection="column"
      width={['unset', 'unset', '34.75rem']}
      margin={['unset', 'unset', 'unset', '0 auto']}
      py={['2.875rem', '2.875rem', '2.875rem', '5rem']}
    >
      <NewsletterHeader />
      <NewsletterForm />
    </Box>
  </Box>
);

export default LiquidityNewsletter;
