import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import StepsChart from '../../../components/charts/steps-chart';
import { DATA_CHART } from '../overview.data';

const PriceMarketChart: FC = () => (
  <Box height="3.125rem" width={['100%', '100%', '100%', '40%']}>
    <StepsChart data={DATA_CHART} dataKey="amount" inDollars onlyLine />
  </Box>
);

export default PriceMarketChart;
