import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';
import { formatDollars } from '@/utils';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { TFilter } from '../card-header/card-header.types';
import { DataPoint } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const TotalLiquidity: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);

  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    getMetric('get-total-liquidity', `filter=${filter}`).then(
      (total: ValuesInTimestamp) => {
        const newData = total.map(({ timestamp, value }) => {
          const date = new Date(timestamp * 1000);

          return {
            date,
            amount: value,
            description: date.toUTCString(),
            day: `${date.getDate()}/${date.getMonth() + 1}`,
          };
        });

        setData(newData);
      }
    );
  }, [filter]);

  const maxAmount = Math.max(...data.map(({ amount }) => amount));

  const maxLiquidityItem = data.find(({ amount }) => amount === maxAmount);

  return (
    <MetricsCardContainer>
      <CardHeader
        activeFilter={filter}
        setFilter={setFilter}
        title="metrics.cards.totalLiquidity"
        filters={['all', 'month', 'halfMonth']}
      />
      <Box p="l">
        <Typography variant="large">{`${formatDollars(maxAmount)}`}</Typography>
        <Typography variant="small">{`${maxLiquidityItem?.description}`}</Typography>
      </Box>
      <Box height="14.1875rem" pb="l">
        <Chart dataKey="amount" xAxis="day" data={data} type="steps" />
      </Box>
    </MetricsCardContainer>
  );
};

export default TotalLiquidity;
