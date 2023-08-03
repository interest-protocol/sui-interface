import { Box, Typography } from '@interest-protocol/ui-kit';
import { last } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getTotalLiquidity } from '@/api/metrics';
import { formatDollars } from '@/utils';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { DataPoint } from '../metrics.data';
import MetricsCardContainer from '../metrics-card-container';

const TotalLiquidity: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);

  useEffect(() => {
    getTotalLiquidity().then((total) => {
      const newData = total.map(({ timestamp, value }) => {
        const date = new Date(timestamp * 1000);

        return {
          date,
          amount: value,
          description: date.toUTCString(),
          day: `${date.getDate()}/${date.getMonth()}`,
        };
      });

      setData(newData);
    });
  }, []);

  return (
    <MetricsCardContainer>
      <CardHeader
        title="metrics.cards.totalLiquidity"
        hasAllTime
        hasOneMonth
        hasFourteenDays
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
