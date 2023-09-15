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
  isEquidistant,
  isDropdownInformation,
}) => (
  <Box
    display="grid"
    alignItems="center"
    position="relative"
    color="onSurfaceVariant"
    textTransform="capitalize"
    fontWeight={isTableHead ? '400' : ''}
    columnGap={isEquidistant ? 's' : isDropdownInformation ? 'unset' : 'xl'}
    gridTemplateColumns={
      isDropdownInformation
        ? '110px 1fr'
        : isEquidistant && numCols
        ? `2rem 1fr repeat(${numCols - 2}, 1fr)`
        : numCols
        ? [
            `2rem 1fr repeat(${numCols - 2}, 1fr)`,
            `2rem 1fr repeat(${numCols - 2}, 1fr)`,
            `2rem 1fr repeat(${numCols - 2}, 1fr)`,
            `2rem 1fr repeat(${numCols - 2}, 1fr)`,
          ]
        : ''
    }
    mx="-0.5rem"
    py={isTableHead ? 'l' : 'm'}
    borderColor="outline.outlineVariant"
    borderRadius={withBG ? '0.25rem' : 'unset'}
    bg={withBG ? 'surface.containerHigh' : 'unset'}
    borderBottom={withBG && isFirstRow ? '1px solid' : 'unset'}
    px={hasDropdown ? 'unset' : isDropdownInformation ? 'xl' : 'm'}
    borderTopLeftRadius={withBG && isFirstRow ? '0.25rem' : 'unset'}
    borderTopRightRadius={withBG && isFirstRow ? '0.25rem' : 'unset'}
    borderBottomLeftRadius={withBG && isFirstRow ? 'unset' : '0.25rem'}
    borderBottomRightRadius={withBG && isFirstRow ? 'unset' : '0.25rem'}
  >
    {children}
  </Box>
);

export default TableRow;
