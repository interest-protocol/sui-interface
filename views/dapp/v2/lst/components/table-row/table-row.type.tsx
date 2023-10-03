import { TableRowProps as GeneralTableRowProps } from '../../../metrics/top-tables/table.types';

export interface TableRowProps extends Omit<GeneralTableRowProps, 'title'> {
  withBG?: boolean;
  isWide?: boolean;
  isFirstRow?: boolean;
  hasDropdown?: boolean;
  isEquidistant?: boolean;
  isDropdownInformation?: boolean;
  extraSpace?: number;
}
