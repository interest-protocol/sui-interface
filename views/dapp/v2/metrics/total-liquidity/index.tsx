import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { StepsChart } from '../../components/charts';
import CardHeader from '../card-header';
import { findMaxObject } from '../metrics.utils';
import { TotalLiquidityProps } from './total-liquidity.types';

const TotalLiquidity: FC<TotalLiquidityProps> = ({ data }) => {
  return (
    <Box
      width="100%"
      display="flex"
      borderRadius="m"
      color="onSurface"
      height="23.1875rem"
      flexDirection="column"
      bg="surface.containerLow"
      justifyContent="space-between"
      gridColumn={['1/-1', '1/-1', '1/-1', '1/7']}
    >
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
        <StepsChart data={data} />
      </Box>
    </Box>
  );
};

export default TotalLiquidity;
