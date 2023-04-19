import { Box } from '@interest-protocol/ui-kit';
import Head from 'next/head';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import AdvantagesCard from './advantages-card';
import { ADVANTAGE_LIST, slickSettings } from './advantages-data';
import AdvantagesTitle from './advantages-title';

const Advantages: FC = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <Box bg="background">
      <Box variant="container" py="4xl">
        <AdvantagesTitle />
        <Box gap="s" gridColumn="1/-1" maxWidth="50rem">
          <Slider {...slickSettings}>
            {ADVANTAGE_LIST.map((advantage) => (
              <AdvantagesCard key={v4()} {...advantage} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  </>
);

export default Advantages;
