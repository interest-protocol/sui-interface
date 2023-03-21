/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode } from 'react';

import { BoxProps } from '@/elements/box/box.types';

interface ITableHeading {
  tip?: string;
  item: ReactNode;
}

export interface DropdownTableCellProps {
  as: 'td' | 'th';
  tip?: string;
}

type TItems = ReadonlyArray<ReactNode>;

interface IDropdown {
  args: any;
  Component: FC<any>;
}

interface IRow {
  items: TItems;
  sideContent?: ReactNode;
  dropdown?: IDropdown;
}

interface BackgroundColorMap {
  bg?: BoxProps['backgroundColor'];
  desktopBg?: BoxProps['backgroundColor'];
}

export interface DropdownTableProps {
  ordinate?: boolean;
  isDesktop?: boolean;
  data: ReadonlyArray<IRow>;
  headings: ReadonlyArray<ITableHeading>;
  backgroundColorMap?: ReadonlyArray<BackgroundColorMap>;
}

export interface DropdownTableRowProps {
  items: TItems;
  index?: number;
  ordinate?: boolean;
  isDesktop?: boolean;
  dropdown: IDropdown;
  sideContent?: ReactNode;
  headings: ReadonlyArray<ITableHeading>;
  bg?: BoxProps['bg'];
  desktopBg?: BoxProps['bg'];
}
