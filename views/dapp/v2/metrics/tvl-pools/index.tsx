import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import MetricsCardContainer from '../metrics-card-container';
import { TVLPoolsProps } from './tvl-pools.types';

const TVLPools: FC<TVLPoolsProps> = ({ data }) => {
  return (
    <MetricsCardContainer>
      <CardHeader title="metrics.cards.tvlPools" hasAllTime hasDaily />
      <Box height="16.25rem" width="80%" pb="l" mx="auto">
        <Chart dataKey="amount" data={data} label="Pool" type="pie" />
      </Box>
    </MetricsCardContainer>
  );
};

export default TVLPools;
