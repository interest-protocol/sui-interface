import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import Chart from '../../components/charts';
import { ChartContainerProps } from '../metrics.types';

const ChartContainer: FC<ChartContainerProps> = ({
  data,
  type,
  xAxis,
  header,
  dataKey,
  inDollars,
  isLoading,
}) => (
  <>
    <Box p="l">
      {isLoading ? (
        <>
          <Skeleton width="40%" />
          <Skeleton width="40%" />
        </>
      ) : (
        <>
          <Typography variant="large">{header.amount}</Typography>
          <Typography variant="small">{header.description}</Typography>
        </>
      )}
    </Box>
    <Box height="14.1875rem" pb="l" px={isLoading ? 'l' : 'unset'}>
      {isLoading ? (
        <>
          <Skeleton height="80%" />
          <Skeleton height="10%" style={{ marginTop: '2.5%' }} />
        </>
      ) : (
        <Chart
          data={data}
          type={type}
          xAxis={xAxis}
          dataKey={dataKey}
          inDollars={inDollars}
        />
      )}
    </Box>
  </>
);

export default ChartContainer;
