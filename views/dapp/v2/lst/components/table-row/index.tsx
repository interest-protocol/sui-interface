import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { TableRowProps } from './table-row.type';

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({
  withBG,
  isWide,
  numCols,
  children,
  extraSpace,
  isFirstRow,
  isTableHead,
  hasDropdown,
  isEquidistant,
  isDropdownInformation,
}) => {
  const { colors } = useTheme() as Theme;
  return (
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
          : isWide
          ? '2rem 1fr 1fr repeat(2, 2fr)'
          : numCols
          ? [
              `2rem ${extraSpace ?? '2'}fr repeat(${numCols - 2}, 1fr)`,
              `2rem ${extraSpace ?? '2'}fr repeat(${numCols - 2}, 1fr)`,
              `2rem ${extraSpace ?? '2'}fr repeat(${numCols - 2}, 1fr)`,
              `2rem ${extraSpace ?? '2'}fr repeat(${numCols - 2}, 1fr)`,
            ]
          : ''
      }
      mx="-0.5rem"
      py={isTableHead ? 'l' : 'm'}
      borderRadius={withBG ? '0.25rem' : 'unset'}
      bg={withBG ? 'surface.containerHigh' : 'unset'}
      borderBottom={
        withBG && isFirstRow
          ? '1px solid ' + colors['outline.outlineVariant']
          : 'unset'
      }
      px={hasDropdown ? 'unset' : isDropdownInformation ? 'xl' : 'm'}
      borderTopLeftRadius={withBG && isFirstRow ? '0.25rem' : 'unset'}
      borderTopRightRadius={withBG && isFirstRow ? '0.25rem' : 'unset'}
      borderBottomLeftRadius={withBG && isFirstRow ? 'unset' : '0.25rem'}
      borderBottomRightRadius={withBG && isFirstRow ? 'unset' : '0.25rem'}
    >
      {children}
    </Box>
  );
};

export default TableRow;
