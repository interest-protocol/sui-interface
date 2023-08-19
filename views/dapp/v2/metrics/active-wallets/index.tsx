import { last } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';

import CardHeader from '../card-header';
import { TFilter } from '../card-header/card-header.types';
import ChartContainer from '../chart-container';
import { DataPoint, HeaderChartContainerProps } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const ActiveWallets: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);
  const [isLoading, setIsLoading] = useState(!data.length);

  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    setIsLoading(true);
    getMetric(
      'get-total-active-wallets',
      `filter=${String(filter === 'daily')}`
    ).then((total: ValuesInTimestamp) => {
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
      setIsLoading(false);
    });
  }, [filter]);

  const headerChartContainer: HeaderChartContainerProps = {
    amount: `${Math.max(...data.map(({ amount }) => amount))}`,
    description: `${last(data)?.description}`,
  };

  return (
    <MetricsCardContainer>
      <CardHeader
        activeFilter={filter}
        setFilter={setFilter}
        filters={['all', 'daily']}
        title="metrics.cards.activeWallets"
      />
      <ChartContainer
        header={headerChartContainer}
        dataKey="amount"
        xAxis="day"
        data={data}
        type="bar"
        isLoading={isLoading}
      />
    </MetricsCardContainer>
  );
};

export default ActiveWallets;
