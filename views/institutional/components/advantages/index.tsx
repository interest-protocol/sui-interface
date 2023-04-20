import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { ADVANTAGE_LIST, slickSettings } from './advantages.data';
import AdvantagesCard from './advantages-card';
import AdvantagesTitle from './advantages-title';

const Advantages: FC = () => (
  <Box bg="background" py="4xl">
    <Box variant="container">
      <AdvantagesTitle />
    </Box>
    <Box gap="s" width={['100%', '100%', '50rem']} mx="auto">
      <Slider {...slickSettings}>
        {ADVANTAGE_LIST.map((advantage) => (
          <AdvantagesCard key={v4()} {...advantage} />
        ))}
      </Slider>
    </Box>
  </Box>
);

export default Advantages;
