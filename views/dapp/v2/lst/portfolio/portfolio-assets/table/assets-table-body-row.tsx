import { Box, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import TableRow from '../../../components/table-row';
import { AssetsRowItemProps } from '../../portfolio.type';
import TotalAssetsMintedInfo from './total-assets-minted-info';

const AssetsTableBodyRow: FC<AssetsRowItemProps & { index: number }> = ({
  maturity,
  dayLeft,
  index,
  totalAssetsMinted,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <Box key={v4()}>
      <TableRow numCols={5} isWide topAlignment>
        <Typography
          variant="small"
          display="flex"
          minHeight="4rem"
          alignItems="center"
        >
          {index + 1}
        </Typography>
        <Typography
          variant="small"
          display="flex"
          minHeight="4rem"
          alignItems="center"
        >
          {maturity}
        </Typography>
        <Typography
          variant="small"
          display="flex"
          minHeight="4rem"
          alignItems="center"
        >
          {dayLeft <= 0
            ? 'Matured' // TODO: Translate Matured
            : dayLeft.toFixed(0)}
        </Typography>
        {totalAssetsMinted.map((minted, index) => (
          <TotalAssetsMintedInfo
            key={v4()}
            {...minted}
            index={index}
            isDropdownOpen={isDropdownOpen}
            handleClick={() => setIsDropdownOpen(not)}
          />
        ))}
      </TableRow>
    </Box>
  );
};

export default AssetsTableBodyRow;