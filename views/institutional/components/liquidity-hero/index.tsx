import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import HeroCallToAction from './hero-call-to-action';
import HeroPool from './hero-pool';
import HeroTitle from './hero-title';

const LiquidityHero: FC = () => (
  <Box bg="background" minHeight="calc(100vh - 108px)">
    <Box
      variant="container"
      alignItems="center"
      border=".0625rem solid"
      borderColor="outline"
      borderLeft="0"
      borderRight="0"
      py="28px"
      minHeight="calc(100vh - 172px)"
    >
      <Box
        gridColumn={['1/-1', '1/-1', '1/-1', '1/7']}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display={['none', 'none', 'none', 'block']}>
          <HeroTitle />
        </Box>
        <Box display={['block', 'block', 'block', 'none']}>
          <HeroPool />
          <HeroTitle />
        </Box>
        <HeroCallToAction />
      </Box>
      <Box display={['none', 'none', 'none', 'block']} gridColumn="7/-1">
        <HeroPool />
      </Box>
    </Box>
  </Box>
);

export default LiquidityHero;
