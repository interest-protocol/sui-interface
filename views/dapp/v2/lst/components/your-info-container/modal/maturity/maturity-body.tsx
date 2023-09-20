import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import TableRow from '@/views/dapp/v2/lst/components/table-row';

import MaturityModalBodyRow from './maturity-body-row';

const MaturityModalBody: FC = () => {
  return (
    <Box px="m">
      <TableRow numCols={3} isTableHead isEquidistant>
        <Box />
        <Typography variant="small">Date</Typography>
        <Typography variant="small" textAlign="right" pr="m">
          Days left to mature
        </Typography>
        <Box />
      </TableRow>
      <MaturityModalBodyRow date="10/05/2024" daysLeft="100+" />
      <MaturityModalBodyRow date="10/05/2024" daysLeft="100+" />
      <MaturityModalBodyRow date="10/05/2024" daysLeft="100+" withBG />
      <MaturityModalBodyRow date="10/05/2024" daysLeft="100+" />
    </Box>
  );
};

export default MaturityModalBody;
