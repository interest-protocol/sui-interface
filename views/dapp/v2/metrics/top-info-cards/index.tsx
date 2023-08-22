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
    getMetric('get-overview').then(setData);
  }, []);

  return (
    <Box
      gridColumn="1/-1"
      width="100%"
      gap="s"
      display="grid"
      overflowX="auto"
      gridTemplateColumns="repeat(4, 1fr)"
    >
      {TOP_INFO_CARDS_DATA.map(({ Icon, description, money }, index) => (
        <TopInfoCards
          key={v4()}
          Icon={Icon}
          description={description}
          amount={(money ? formatDollars : formatNumber)(
            data?.[index] ?? 0
          ).toString()}
          loading={!data?.length}
        />
      ))}
    </Box>
  );
};

export default TopInfoCardsList;
