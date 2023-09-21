import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import TableRow from '@/views/dapp/v2/lst/components/table-row';

import { MaturityBodyRowProps } from '../modal.types';

const MaturityModalBodyRow: FC<MaturityBodyRowProps> = ({
  handleSelectMaturity,
  currentMaturity,
  maturityInfo,
}) => {
  const selected = currentMaturity.id == maturityInfo.id;
  return (
    <Box onClick={() => handleSelectMaturity(maturityInfo)} cursor="pointer">
      <TableRow
        numCols={3}
        isTableHead
        isEquidistant
        withBG={currentMaturity.id == maturityInfo.id}
        customBG="#99BBFF14"
      >
        <Box
          height="1.5rem"
          width="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {selected && (
            <CheckmarkSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
          )}
        </Box>
        <Typography variant="medium">{maturityInfo.date}</Typography>
        <Typography variant="medium" textAlign="right" pr="m">
          {maturityInfo.daysLeft}+
        </Typography>
        <Box />
      </TableRow>
    </Box>
  );
};

export default MaturityModalBodyRow;
