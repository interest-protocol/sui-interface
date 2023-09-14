import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import AssetsTableHead from '../../../components/assets-table/assets-table-head';
import { AssetsListProps } from '../../portfolio.type';
import AssetsTableBody from './assets-table-body';

const AssetsTable: FC<AssetsListProps> = ({ data }) => {
  return (
    <Box
      width="100%"
      display="flex"
      overflowX="auto"
      borderRadius="m"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
    >
      <Box minWidth="64em">
        <AssetsTableHead />
        <Box>
          <AssetsTableBody data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default AssetsTable;
