import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Overview from './overview';

const StatsSection: FC = () => {
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Overview />;
    </Box>
  );
};

export default StatsSection;
