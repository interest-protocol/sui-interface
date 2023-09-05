import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Stats from './stats';

const Overview: FC = () => (
  <Box width={['100%', '100%', '100%', '55%']}>
    <Stats />
  </Box>
);

export default Overview;
