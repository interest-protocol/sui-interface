import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import TableRow from '@/views/dapp/v2/lst/components/table-row';

const MaturityModalBody: FC = () => {
  return (
    <Box>
      <TableRow numCols={3} isTableHead isEquidistant>
        <Box />
        <Typography variant="small" textTransform="uppercase">
          Date
        </Typography>
        <Typography
          variant="small"
          textAlign="right"
          textTransform="uppercase"
          pr="m"
        >
          Days left to mature
        </Typography>
        <Box />
      </TableRow>
    </Box>
  );
};

export default MaturityModalBody;
