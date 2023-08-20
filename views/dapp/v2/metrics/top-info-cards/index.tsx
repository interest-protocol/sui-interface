import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { getMetric } from '@/api/metrics';
import { formatDollars, formatNumber } from '@/utils';

import { TOP_INFO_CARDS_DATA } from '../metrics.data';
import TopInfoCards from './top-info-card';

const TopInfoCardsList: FC = () => {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    Promise.all([
      getMetric('get-tvl'),
      getMetric('get-pools'),
      getMetric('get-swaps'),
      getMetric('get-daily-trading-volume'),
    ]).then(setData);
  }, []);

  return (
    <Box gridColumn="1/-1" width="100%" display="flex" gap="s">
      {TOP_INFO_CARDS_DATA.map(({ Icon, description, money }, index) => (
        <TopInfoCards
          key={v4()}
          Icon={Icon}
          description={description}
          amount={(money ? formatDollars : formatNumber)(
            data?.[index] ?? 0
          ).toString()}
        />
      ))}
    </Box>
  );
};

export default TopInfoCardsList;