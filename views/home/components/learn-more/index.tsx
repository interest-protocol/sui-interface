import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Link from '@/components/svg/link';

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
        <LearnMoreCard name={'documentation'} Icon={Link} link="" />
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
        <LearnMoreCard name={'ourTeam'} Icon={Link} link="" />
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
        <Box display={['block', 'block', 'block', 'none']}>
          <LearnMoreCard name={'ourTeam'} Icon={Link} link="" />
        </Box>
        <Box display={['none', 'none', 'none', 'block']}>
          <LearnMoreCard type="big" name={'mediaKit'} Icon={Link} link="" />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default LearnMore;
