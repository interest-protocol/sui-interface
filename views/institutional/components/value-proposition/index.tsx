import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  DesktopValuePropositionDescription,
  MobileValuePropositionDescription,
} from './value-proposition-description';
import ValuePropositionIllustration from './value-proposition-illustration';
import ValuePropositionTitle from './value-proposition-title';

const ValueProposition: FC = () => (
  <Box bg="background" pb="4xl">
    <Box
      borderRadius="m"
      border="1px solid"
      variant="container"
      justifyItems="unset"
      borderColor={['transparent', 'transparent', 'transparent', 'textAccent']}
    >
      <Box
        display="grid"
        columnGap="4xl"
        gridColumn="1/-1"
        p={['0', '0', '0', 'l']}
        gridTemplateAreas={[
          "'b' 'a'",
          "'b' 'a'",
          "'b' 'a'",
          "'a a b b b' 'a a c c c'",
        ]}
        gridTemplateColumns={['1fr', '1fr', '1fr', 'repeat(5, 1fr)']}
      >
        <Box
          gridArea="a"
          borderRadius="m"
          border="1px solid"
          p={['s', 's', 's', '0']}
          borderColor={[
            'textAccent',
            'textAccent',
            'textAccent',
            'transparent',
          ]}
        >
          <MobileValuePropositionDescription />
          <ValuePropositionIllustration />
        </Box>
        <ValuePropositionTitle />
        <DesktopValuePropositionDescription />
      </Box>
    </Box>
  </Box>
);

export default ValueProposition;
