import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';

import { getTVLByPool } from '@/api/metrics';
import { A_DAY_IN_MILLISECONDS } from '@/constants/date';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { TFilter } from '../card-header/card-header.types';
import { DataPie } from '../metrics.types';
import { getCoinDataFromMetricLabel } from '../metrics.utils';
import MetricsCardContainer from '../metrics-card-container';

const TVLPools: FC = () => {
  const [data, setData] = useState<Array<DataPie>>([]);

  const [filter, setFilter] = useState<TFilter>('all');

  useEffect(() => {
    getTVLByPool().then((total) => {
      const newData = total
        .filter(({ timestamp }) => {
          const now = Date.now();
          const date = timestamp * 1000;

          if (filter === 'daily') return now - A_DAY_IN_MILLISECONDS <= date;

          return true;
        })
        .map((pool) => {
          console.log('>> pool :: ', getCoinDataFromMetricLabel(pool.label));

          return pool;
        });

      setData(newData);
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
      <Box height="16.25rem" width="80%" pb="l" mx="auto">
        <Chart dataKey="amount" data={data} label="Pool" type="pie" />
      </Box>
    </MetricsCardContainer>
  );
};

export default TVLPools;
