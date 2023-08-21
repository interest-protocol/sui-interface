import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { getMetric } from '@/api/metrics';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { TFilter } from '../card-header/card-header.types';
import { DataPie } from '../metrics.types';
import { getPoolFromMetricLabel } from '../metrics.utils';
import MetricsCardContainer from '../metrics-card-container';

const TVLPools: FC = () => {
  const [data, setData] = useState<Array<DataPie>>([]);
  const [isLoading, setIsLoading] = useState(!data.length);

  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    setIsLoading(true);
    getMetric('get-tvl-by-pool').then((total) => {
      const newData = total.map(
        ({
          label,
          ...info
        }: {
          label: string;
          timestamp: number;
          amount: number;
        }) => {
          const pool = getPoolFromMetricLabel(label);

          if (!pool) return { ...info, label };

          const {
            token0: { symbol: symbolA },
            token1: { symbol: symbolB },
          } = pool;

          return { ...info, label: `${symbolA}•${symbolB}` };
        }
      );

      setData(newData);
      setIsLoading(false);
    });
  }, [filter]);

  return (
    <MetricsCardContainer>
      <CardHeader
        title="metrics.cards.tvlPools"
        filters={['all', 'daily']}
        activeFilter={filter}
        setFilter={setFilter}
      />
      <Box
        height="16.25rem"
        width={['95%', '90%', '80%', '80%']}
        pb="l"
        mx="auto"
      >
        {isLoading ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
            width="80%"
            mx="auto"
          >
            <Skeleton height="10rem" width="10rem" borderRadius="10rem" />
            <Skeleton height="1.5rem" width="15rem" />
          </Box>
        ) : (
          <Chart
            inDollars
            type="pie"
            label="Pool"
            data={data}
            dataKey="amount"
          />
        )}
      </Box>
    </MetricsCardContainer>
  );
};

export default TVLPools;
