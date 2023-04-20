import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import LearnMoreCard from './learn-card';
import LearnMoreTitle from './learn-more-title';

const LearnMore: FC = () => (
  <Box bg="background" py="4xl" display="flex">
    <Box
      width="100%"
      variant="container"
      justifyItems="unset"
      gap={['xs', 'xs', 'xs', 'xs']}
      gridTemplateColumns={[
        'repeat(4, 1fr)',
        'repeat(4, 1fr)',
        'repeat(8, 1fr)',
        'repeat(12, 1fr)',
      ]}
    >
      <LearnMoreTitle />
      <LearnMoreCard
        external
        name="documentation"
        link="https://docs.interestprotocol.com/"
      />
      <LearnMoreCard name="ourTeam" link="/team" />
      <LearnMoreCard
        big
        external
        name="mediaKit"
        link="https://drive.google.com/drive/folders/176q4-80OZaHCJEfBiZHsHYHIH0Z_ipgf?usp=share_link"
      />
    </Box>
  </Box>
);

export default LearnMore;
