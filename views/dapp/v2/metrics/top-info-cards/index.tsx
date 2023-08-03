import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import {
  getAccumulatedVolume,
  getDailyTradingVolume,
  getTVL,
} from '@/api/metrics';

import { TOP_INFO_CARDS_DATA } from '../metrics.data';
import TopInfoCards from './top-info-card';

const TopInfoCardsList: FC = () => {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    Promise.all([
      getTVL(),
      getDailyTradingVolume(),
      getAccumulatedVolume(),
    ]).then(setData);
  }, []);

  return (
    <Box gridColumn="1/-1" width="100%" display="flex" gap="s">
      {TOP_INFO_CARDS_DATA.map(({ Icon, description }, index) => (
        <TopInfoCards
          key={v4()}
          Icon={Icon}
          description={description}
          amount={data?.[index] ?? 0}
        />
      ))}
    </Box>
  );
};

export default TopInfoCardsList;
