import { last, values } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';
import { formatDollars } from '@/utils';

import CardHeader from '../card-header';
import ChartContainer from '../chart-container';
import { DataPoint, HeaderChartContainerProps } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const DailyVolume: FC = () => {
  const [data, setData] = useState<Array<DataPoint>>([]);
  const [isLoading, setIsLoading] = useState(!data.length);

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
      setIsLoading(false);
    });
  }, []);

  const headerChartContainer: HeaderChartContainerProps = {
    amount: formatDollars(last(data)?.amount ?? 0),
    description: `${last(data)?.description}`,
  };

  return (
    <MetricsCardContainer>
      <CardHeader title="metrics.cards.dailyVolume" />
      <ChartContainer
        header={headerChartContainer}
        dataKey="amount"
        xAxis="day"
        data={data}
        type="bar"
        isLoading={isLoading}
        inDollars
      />
    </MetricsCardContainer>
  );
};

export default DailyVolume;
