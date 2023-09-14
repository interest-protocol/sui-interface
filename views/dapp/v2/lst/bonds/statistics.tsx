import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import AssetsTable from '../components/assets-table';
import PricesMarketCard from '../components/prices-market-card';
import RegularOverview from '../components/regular-overview';

const Statistics: FC = () => {
  return (
    <Box
      gap="0.5rem"
      display="flex"
      flexDirection="column"
      width={['100%', '100%', '100%', '55%']}
    >
      <PricesMarketCard />
      <RegularOverview />
      <AssetsTable dataLimit={6} />
    </Box>
  );
};

export default Statistics;
