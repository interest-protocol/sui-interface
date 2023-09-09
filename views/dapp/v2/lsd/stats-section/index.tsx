import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Overview from './overview';
import TotalStaked from './total-staked';

const StatsSection: FC = () => {
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Overview />
      <TotalStaked />
    </Box>
  );
};

export default StatsSection;
