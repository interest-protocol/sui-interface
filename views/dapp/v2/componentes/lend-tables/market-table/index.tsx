import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BorrowMarketTable from '../borrow-market-table';
import SupplyMarketTable from '../supply-market-table';
import { MarketTableProps } from './market-table.types';

const MarketTable: FC<MarketTableProps> = ({ title }) => (
  <Box width="100%">
    <Typography variant="title6" textAlign="center" my="2xl">
      {title}
    </Typography>
    <Box>
      {title === 'Supply Market' ? (
        <SupplyMarketTable />
      ) : title === 'Borrow Market' ? (
        <BorrowMarketTable />
      ) : (
        ''
      )}
    </Box>
  </Box>
);

export default MarketTable;
