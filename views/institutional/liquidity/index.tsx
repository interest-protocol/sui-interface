import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import FirstThingFirst from '../components/first-thing-first-section';
import LiquidityHero from '../components/liquidity-hero';
import LiquidityProgram from '../components/liquidity-program';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background" color="text" flex="1" textAlign="center">
      <LiquidityHero />
      <FirstThingFirst />
      <LiquidityProgram />
    </Box>
  </Layout>
);

export default Liquidity;
