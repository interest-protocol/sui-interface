import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Tokens from './tokens';

const Portfolio: FC = () => (
  <Box variant="container" display="flex" flexDirection="column">
    <Box
      pb="1rem"
      width="100%"
      display="flex"
      gridColumn="1/-1"
      flexDirection="column"
      gap={['l', 'l', 'l', '3xl']}
    >
      <Tokens />
    </Box>
  </Box>
);

export default Portfolio;
