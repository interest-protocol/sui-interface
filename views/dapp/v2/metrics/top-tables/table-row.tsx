import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { TableRowProps } from './table.types';

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({
  children,
  numCols,
  title,
  isTableHead,
}) => (
  <>
    <Typography variant="small" pt="m" px="l" textTransform="capitalize">
      {title}
    </Typography>
    <Box
      fontWeight={isTableHead ? '300' : ''}
      color="onSurfaceVariant"
      p={isTableHead ? 'l' : ''}
      py={isTableHead ? 'l' : ''}
      borderBottom={isTableHead ? '.0625rem solid' : '0'}
      borderColor="outline.outlineVariant"
      display="grid"
      columnGap={numCols === 7 ? 'xl' : numCols === 5 ? '4xl' : '0'}
      alignItems="center"
      textTransform="capitalize"
      gridTemplateColumns={
        numCols === 7
          ? '1fr 3fr repeat(5, 2fr)'
          : numCols === 5
          ? '1fr 3fr repeat(3, 2fr)'
          : '0'
      }
    >
      {children}
    </Box>
  </>
);

export default TableRow;
