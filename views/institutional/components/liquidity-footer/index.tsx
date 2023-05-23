import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import FooterHeader from './liquidity-newsletter-header';
import FooterSocialMedias from './liquidity-newsletter-social-medias';

const LiquidityFooter: FC = () => (
  <Box variant="container">
    <Box
      display="flex"
      gridColumn="1/-1"
      flexDirection="column"
      width={['21.5rem', '21.5rem', '21.5rem', '31.188rem']}
      py={['3.5rem', '3.5rem', '3.5rem', '5rem']}
    >
      <FooterHeader />
      <FooterSocialMedias />
    </Box>
  </Box>
);

export default LiquidityFooter;
