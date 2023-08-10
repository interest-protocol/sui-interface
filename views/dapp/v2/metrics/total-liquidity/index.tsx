import { Box, Typography } from '@interest-protocol/ui-kit';
import { last } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getTotalLiquidity } from '@/api/metrics';
import {
  A_MONTH_IN_MILLISECONDS,
  A_WEEK_IN_MILLISECONDS,
} from '@/constants/date';
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
    getTotalLiquidity().then((total) => {
      const newData = total
        .map(({ timestamp, value }) => {
          const date = new Date(timestamp * 1000);

          return {
            date,
            amount: value,
            description: date.toUTCString(),
            day: `${date.getDate()}/${date.getMonth() + 1}`,
          };
        })
        .filter(({ date }) => {
          const now = Date.now();

          if (filter === 'halfMonth')
            return now - A_WEEK_IN_MILLISECONDS * 2 <= date.getTime();

          if (filter === 'month')
            return now - A_MONTH_IN_MILLISECONDS <= date.getTime();

          return true;
        });

      setData(newData);
    });
  }, [filter]);

  return (
    <MetricsCardContainer>
      <CardHeader
        activeFilter={filter}
        setFilter={setFilter}
        title="metrics.cards.totalLiquidity"
        filters={['all', 'month', 'halfMonth']}
      />
      <Box p="l">
        <Typography variant="large">{`${formatDollars(
          Math.max(...data.map(({ amount }) => amount))
        )}`}</Typography>
        <Typography variant="small">{`${last(data)?.description}`}</Typography>
      </Box>
      <Box height="14.1875rem" pb="l">
        <Chart dataKey="amount" xAxis="day" data={data} type="steps" />
      </Box>
    </MetricsCardContainer>
  );
};

export default TotalLiquidity;
