import { Box, Typography } from '@interest-protocol/ui-kit';
import { last, values } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { TFilter } from '../card-header/card-header.types';
import { DataPoint } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const ActiveWallets: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);

  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    getMetric(
      'get-total-active-wallets',
      `filter=${String(filter === 'daily')}`
    ).then((total: ValuesInTimestamp) => {
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
  }, [filter]);

  return (
    <MetricsCardContainer>
      <CardHeader
        activeFilter={filter}
        setFilter={setFilter}
        filters={['all', 'daily']}
        title="metrics.cards.activeWallets"
      />
      <Box p="l">
        <Box p="l">
          <Typography variant="large">{last(data)?.amount}</Typography>
          <Typography variant="small">{last(data)?.description}</Typography>
        </Box>
      </Box>
      <Box height="14.1875rem" pb="l">
        <Chart dataKey="amount" xAxis="day" data={data} type="bar" />
      </Box>
    </MetricsCardContainer>
  );
};

export default ActiveWallets;
