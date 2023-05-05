import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MarketTable } from '..';

// import { BorrowMarketTable, SupplyMarketTable } from '..';

const LendTables: FC = () => (
  <Box variant="container">
    <Box gridColumn="1 / -1" color="text">
      <Box display="flex" flexWrap="wrap" gap=".5rem">
        <MarketTable title="Supply Market" />
        <MarketTable title="Borrow Market" />
      </Box>
    </Box>
  </Box>
);

export default LendTables;
