import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { TableRowProps } from '../../../metrics/top-tables/table.types';

const TableRow: FC<
  PropsWithChildren<Omit<TableRowProps, 'numCols' | 'title'>>
> = ({ children, isTableHead }) => (
  <Box
    fontWeight={isTableHead ? '400' : ''}
    color="onSurfaceVariant"
    display="grid"
    columnGap="xl"
    alignItems="center"
    textTransform="capitalize"
    gridTemplateColumns={[
      '2rem 2fr repeat(3, 1fr)',
      '2rem 2fr repeat(3, 1fr)',
      '2rem 2fr repeat(3, 1fr)',
      '2rem 3fr repeat(3, 1fr)',
    ]}
    py={isTableHead ? 'l' : 'm'}
  >
    {children}
  </Box>
);

export default TableRow;
