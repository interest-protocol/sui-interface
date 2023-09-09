import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Overview from './overview';
import TotalRewards from './total-rewards';

const StatsSection: FC = () => {
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Overview />
      <TotalRewards />
    </Box>
  );
};

export default StatsSection;
