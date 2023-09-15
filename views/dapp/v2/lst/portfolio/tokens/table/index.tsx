import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import TokensTableBody from './tokens-table-body';
import TokensTableHead from './tokens-table-head';

const TokensTable: FC = () => (
  <Box
    width="100%"
    display="flex"
    borderRadius="m"
    color="onSurface"
    gridColumn="1/-1"
    flexDirection="column"
  >
    <Box>
      <TokensTableHead />
      <Box>
        <TokensTableBody />
      </Box>
    </Box>
  </Box>
);

export default TokensTable;
