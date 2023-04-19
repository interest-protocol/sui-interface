import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import LearnMoreCard from './learn-card';
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
        <LearnMoreCard name={'mediaKit'} />
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
        <LearnMoreCard name={'ourTeam'} />
      </Box>
    </Box>
  </Box>
);

export default LearnMore;
