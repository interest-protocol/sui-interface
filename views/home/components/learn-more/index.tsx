import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import ResponsiveImage from '@/elements/responsive-image';

import LearnMoreCard from './learn-card';
import { LEARN_TYPES } from './learn-more.data';
import LearnMoreTitle from './learn-more-title';

const LearnMore: FC = () => (
  <Box bg="background" py="4xl">
    <Box variant="container">
      <LearnMoreTitle />
      <Box
        mt="4xl"
        width="100%"
        display="grid"
        columnGap="2xl"
        alignItems="end"
        borderRadius="m"
        border="1px solid"
        borderColor="textAccent"
        gridColumn={['1/-1', '1/-1', '1/-1', '1/7']}
      >
        <LearnMoreCard name={'documentation'} />
      </Box>
      <Box
        mt="4xl"
        width="100%"
        display="grid"
        columnGap="2xl"
        alignItems="end"
        borderRadius="m"
        border="1px solid"
        borderColor="textAccent"
        gridColumn={['1/-1', '1/-1', '1/-1', '7/13']}
      >
        <LearnMoreCard name={'media-kit'} />
      </Box>
      <Box
        mb="4xl"
        width="100%"
        display="grid"
        columnGap="2xl"
        alignItems="end"
        borderRadius="m"
        border="1px solid"
        borderColor="textAccent"
        gridColumn="1/-1"
      >
        <LearnMoreCard name={'our-team'} />
      </Box>
    </Box>
  </Box>
);

export default LearnMore;
