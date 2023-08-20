import { last } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';
import { formatDollars } from '@/utils';

import CardHeader from '../card-header';
import { TFilter } from '../card-header/card-header.types';
import ChartContainer from '../chart-container';
import { DataPoint, HeaderChartContainerProps } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const TotalLiquidity: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);
  const [isLoading, setIsLoading] = useState(!data.length);

  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      }
    );
  }, [filter]);

  const headerChartContainer: HeaderChartContainerProps = {
    amount: formatDollars(last(data)?.amount ?? 0),
    description: `${last(data)?.description}`,
  };

  return (
    <MetricsCardContainer>
      <CardHeader
        activeFilter={filter}
        setFilter={setFilter}
        title="metrics.cards.totalLiquidity"
        filters={['all', 'month', 'halfMonth']}
      />
      <ChartContainer
        inDollars
        data={data}
        xAxis="day"
        type="steps"
        dataKey="amount"
        isLoading={isLoading}
        header={headerChartContainer}
      />
    </MetricsCardContainer>
  );
};

export default TotalLiquidity;
