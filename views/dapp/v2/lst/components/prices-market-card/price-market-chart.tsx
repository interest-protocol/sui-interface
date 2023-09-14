import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import StepsChart from '@/views/dapp/v2/components/charts/steps-chart';

import { ChartProps } from './statistics.types';

const PriceMarketChart: FC<ChartProps> = ({ data }) => (
  <Box height="3.125rem" width={['100%', '100%', '100%', '40%']}>
    <StepsChart data={data} dataKey="amount" inDollars onlyLine />
  </Box>
);

export default PriceMarketChart;
