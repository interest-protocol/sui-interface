import { Box, Typography } from '@interest-protocol/ui-kit';
import { last, values } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';
import { formatDollars } from '@/utils';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { DataPoint } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const DailyVolume: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);

  useEffect(() => {
    getMetric('get-daily-volume').then((total: ValuesInTimestamp) => {
      const newData = values(
        total.reduce(
          (acc, info) => ({
            ...acc,
            [info.timestamp]: info,
          }),
          {} as Record<
            number,
            {
              timestamp: number;
              value: number;
            }
          >
        )
      ).map(({ timestamp, value }) => {
        const date = new Date(timestamp * 1000);

        return {
          date,
          amount: value,
          description: date.toUTCString(),
          day: `${date.getDate()}/${date.getMonth() + 1}`,
        };
      });

      setData(newData);
    });
  }, []);

  return (
    <MetricsCardContainer>
      <CardHeader title="metrics.cards.dailyVolume" />
      <Box p="l">
        <Typography variant="large">{`${formatDollars(
          last(data)?.amount ?? 0
        )}`}</Typography>
        <Typography variant="small">{last(data)?.description}</Typography>
      </Box>
      <Box height="14.1875rem" pb="l">
        <Chart dataKey="amount" xAxis="day" data={data} type="bar" inDollars />
      </Box>
    </MetricsCardContainer>
  );
};

export default DailyVolume;
