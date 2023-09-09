import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ValidatorsTableBody from './validators-table-body';
import ValidatorsTableHead from './validators-table-head';

const ValidatorsTable: FC = () => {
  return (
    <Box
      width="100%"
      display="flex"
      overflowX="auto"
      borderRadius="m"
      overflowY="hidden"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
    >
      <Box minWidth="55em">
        <ValidatorsTableHead />
        <Box>
          <ValidatorsTableBody />
        </Box>
      </Box>
    </Box>
  );
};

export default ValidatorsTable;
