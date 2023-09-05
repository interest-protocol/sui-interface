import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import PricesMarketCard from './prices-market-card';

const Overview: FC = () => {
  return (
    <Box width={['100%', '100%', '100%', '55%']}>
      <PricesMarketCard />
    </Box>
  );
};

export default Overview;
