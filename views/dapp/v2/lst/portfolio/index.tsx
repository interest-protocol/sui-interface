import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import PortfolioAssets from './portfolio-assets';
import { ASSETS_DATA } from './portfolio-assets/assets.data';
// import Tokens from './tokens';

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
      {/* <Tokens /> */}
      <PortfolioAssets data={ASSETS_DATA} />
    </Box>
  </Box>
);

export default Portfolio;
