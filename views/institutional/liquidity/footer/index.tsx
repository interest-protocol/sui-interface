import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import FooterHeader from './header';
import FooterSocialMidia from './social-medias';

const FooterSection: FC = () => (
  <Box bg="background">
    <Box
      display="flex"
      flexDirection="column"
      width={['21.5rem', '21.5rem', '21.5rem', '31.188rem']}
      py={['3.5rem', '3.5rem', '3.5rem', '5rem']}
    >
      <FooterHeader />
      <FooterSocialMidia />
    </Box>
  </Box>
);

export default FooterSection;
