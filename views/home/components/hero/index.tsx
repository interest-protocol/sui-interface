import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import HeroBlock from './hero-block';
import HeroCallToAction from './hero-call-to-action';
import HeroTitle from './hero-title';

const Hero: FC = () => (
  <Box bg="background" minHeight="calc(100vh - 6.75rem)">
    <Box
      variant="container"
      alignItems="center"
      justifyItems="unset"
      minHeight="calc(100vh - 10.75rem)"
    >
      <Box gridColumn={['1/5', '1/5', '2/8']}>
        <HeroTitle />
        <Box display={['block', 'block', 'block', 'none']}>
          <HeroBlock />
        </Box>
        <HeroCallToAction />
      </Box>
      <Box display={['none', 'none', 'none', 'block']} gridColumn="8/11">
        <HeroBlock />
      </Box>
    </Box>
  </Box>
);

export default Hero;
