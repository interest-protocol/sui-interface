import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import LendTables from '../components/lend-tables';
import LimitSection from './limit-section';
import TopMoversSection from './top-movers-section';

const Lend: FC = () => (
  <Box variant="container" display="flex" flexDirection="column">
    <Box pb="1rem" width="100%" gridColumn="1/-1">
      <Typography
        display={['block', 'block', 'block', 'none']}
        variant="displayLarge"
        color="onSurface"
        textTransform="capitalize"
        textAlign="center"
      >
        Lend
      </Typography>
      <TopMoversSection />
      <LimitSection />
      <Box as="hr" borderColor="outline.outlineVariant" />
      <LendTables />
    </Box>
  </Box>
);

export default Lend;
