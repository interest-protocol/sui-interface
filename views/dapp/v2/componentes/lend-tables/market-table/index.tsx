import {
  Box,
  List,
  ListItem,
  SwitchButton,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MarketTableProps } from './market-table.types';

const MarketTable: FC<MarketTableProps> = ({ title }) => (
  <Box
    width={['100%', '100%', 'unset', 'unset']}
    flex={['unset', 'unset', '1', '1']}
  >
    {title}
    <ListItem title="Supply Market">
      <Typography variant="small">jk</Typography>
    </ListItem>
  </Box>
);

export default MarketTable;
