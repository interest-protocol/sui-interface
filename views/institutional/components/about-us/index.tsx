import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SERVICES_LIST } from './about-us.data';
import AboutUsCard from './about-us-card';
import AboutUsTitle from './about-us-title';

const AboutUs: FC = () => (
  <Box bg="background" py="4xl">
    <Box variant="container">
      <AboutUsTitle />
      {SERVICES_LIST.map((service) => (
        <AboutUsCard {...service} key={v4()} />
      ))}
    </Box>
  </Box>
);

export default AboutUs;
