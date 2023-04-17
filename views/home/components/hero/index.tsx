import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import HeroBlock from './hero-block';
import HeroCallToAction from './hero-call-to-action';
import HeroTitle from './hero-title';

const Hero: FC = () => (
  <Box bg="background" height="100vh" pt="4xl">
    <Box variant="container">
      <Box gridColumn={['1/9']}>
        <HeroTitle />
        <Box display={['block', 'block', 'none']}>
          <HeroBlock />
        </Box>
        <HeroCallToAction />
      </Box>
      <Box display={['none', 'none', 'block']} gridColumn="9/13">
        <HeroBlock />
      </Box>
    </Box>
  </Box>
);

export default Hero;
