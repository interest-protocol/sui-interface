import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { TableRowProps } from './table-row.type';

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({
  children,
  numCols,
  withBG,
  isFirstRow,
  isTableHead,
  hasDropdown,
}) => (
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
    px={hasDropdown ? 'unset' : 'm'}
    borderRadius={withBG ? '0.25rem' : 'unset'}
    borderBottomRightRadius={withBG && isFirstRow ? 'unset' : '0.25rem'}
    borderBottomLeftRadius={withBG && isFirstRow ? 'unset' : '0.25rem'}
    borderTopRightRadius={withBG && isFirstRow ? '0.25rem' : 'unset'}
    borderTopLeftRadius={withBG && isFirstRow ? '0.25rem' : 'unset'}
    mx="-0.5rem"
    borderBottom={withBG && isFirstRow ? '1px solid' : 'unset'}
    borderColor="outline.outlineVariant"
  >
    {children}
  </Box>
);

export default TableRow;
