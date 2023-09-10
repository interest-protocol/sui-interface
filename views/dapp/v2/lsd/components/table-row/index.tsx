import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { TableRowProps } from '../../../metrics/top-tables/table.types';

const TableRow: FC<
  PropsWithChildren<Omit<TableRowProps, 'title'> & { withBG?: boolean }>
> = ({ children, numCols, withBG, isTableHead }) => (
  <Box
    fontWeight={isTableHead ? '400' : ''}
    color="onSurfaceVariant"
    display="grid"
    columnGap="xl"
    alignItems="center"
    textTransform="capitalize"
    gridTemplateColumns={[
      `2rem 2fr repeat(${numCols - 2}, 1fr)`,
      `2rem 2fr repeat(${numCols - 2}, 1fr)`,
      `2rem 2fr repeat(${numCols - 2}, 1fr)`,
      `2rem 3fr repeat(${numCols - 2}, 1fr)`,
    ]}
    py={isTableHead ? 'l' : 'm'}
    bg={withBG ? 'surface.containerHigh' : 'unset'}
    px="m"
    borderRadius={withBG ? '0.25rem' : 'unset'}
    mb={withBG ? 'm' : 'unset'}
    mx="-0.5rem"
  >
    {children}
  </Box>
);

export default TableRow;
