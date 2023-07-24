import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { findMaxObject } from '../metrics.utils';
import MetricsCardContainer from '../metrics-card-container';
import { TotalLiquidityProps } from './total-liquidity.types';

const TotalLiquidity: FC<TotalLiquidityProps> = ({ data }) => {
  return (
    <MetricsCardContainer>
      <CardHeader
        title="metrics.cards.totalLiquidity"
        hasAllTime
        hasOneMonth
        hasFourteenDays
      />
      <Box p="l">
        <Typography variant="large">{`$ ${
          findMaxObject(data, 'amount')?.amount
        }`}</Typography>
        <Typography variant="small">{`$ ${
          findMaxObject(data, 'amount')?.date
        }`}</Typography>
      </Box>
      <Box height="14.1875rem" pb="l">
        <Chart dataKey="amount" xAxis="day" data={data} type="steps" />
      </Box>
    </MetricsCardContainer>
  );
};

export default TotalLiquidity;
