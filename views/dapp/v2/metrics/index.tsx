import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOTAL_LIQUIDITY_DATA } from './metrics.data';
import TotalLiquidity from './total-liquidity';

const Metrics: FC = () => {
  return (
    <Box width="100%" variant="container">
      <TotalLiquidity data={TOTAL_LIQUIDITY_DATA} />
    </Box>
  );
};

export default Metrics;
