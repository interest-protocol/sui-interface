import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NewsletterForm from './form';
import NewsletterHeader from './header';

const NewsletterSection: FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    width={['unset', 'unset', '34.75rem']}
    margin={['unset', 'unset', 'unset', '0 auto']}
    py={['2.875rem', '2.875rem', '2.875rem', '5rem']}
  >
    <NewsletterHeader />
    <NewsletterForm />
  </Box>
);

export default NewsletterSection;
