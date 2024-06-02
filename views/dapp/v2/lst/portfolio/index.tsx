import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Assets from './portfolio-assets';
import Tokens from './tokens';

const Portfolio: FC = () => (
  <Box
    pb="1rem"
    width="100%"
    display="flex"
    gridColumn="1/-1"
    flexDirection="column"
    gap={['l', 'l', 'l', '3xl']}
  >
    <Tokens />
    <Assets />
  </Box>
);

export default Portfolio;