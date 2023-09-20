import { Box, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import TableRow from '@/views/dapp/v2/lst/components/table-row';

import { MaturityBodyRowProps } from '../modal.type';

const MaturityModalBodyRow: FC<MaturityBodyRowProps> = ({
  date,
  daysLeft,
  withBG,
}) => {
  const [selected, setSelected] = useState(withBG);
  const handleSelect = () => setSelected(not);
  return (
    <Box onClick={handleSelect}>
      <TableRow
        numCols={3}
        isTableHead
        isEquidistant
        withBG={withBG}
        customBG="#99BBFF14"
      >
        <Box>
          {selected && (
            <CheckmarkSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          )}
        </Box>
        <Typography variant="medium">{date}</Typography>
        <Typography variant="medium" textAlign="right" pr="m">
          {daysLeft}
        </Typography>
        <Box />
      </TableRow>
    </Box>
  );
};

export default MaturityModalBodyRow;
