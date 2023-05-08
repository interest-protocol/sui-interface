import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import LiquidityProgram from '../components/liquidity-program';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background" color="text" flex="1">
      <LiquidityProgram />
    </Box>
  </Layout>
);

export default Liquidity;
