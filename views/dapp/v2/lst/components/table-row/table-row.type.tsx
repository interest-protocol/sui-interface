import { TableRowProps as GeneralTableRowProps } from '../../../metrics/top-tables/table.types';

export interface TableRowProps extends Omit<GeneralTableRowProps, 'title'> {
  withBG?: boolean;
  isWide?: boolean;
  extraSpace?: number;
  isFirstRow?: boolean;
  hasDropdown?: boolean;
  topAlignment?: boolean;
  isEquidistant?: boolean;
  isDropdownInformation?: boolean;
}
