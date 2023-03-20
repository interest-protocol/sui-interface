import { ReactNode } from 'react';

import { BoxProps } from '../box/box.types';

export interface IHeading {
  tip?: string;
  item: ReactNode;
}

type TItems = ReadonlyArray<ReactNode>;

export interface IRow {
  items: TItems;
  button?: ReactNode;
  mobileSide?: ReactNode;
  handleClick?: () => void;
}

interface BackgroundColorMap {
  bg?: BoxProps['backgroundColor'];
  desktopBg?: BoxProps['backgroundColor'];
}
export interface ResponsiveTableProps {
  loading?: boolean;
  ordinate?: boolean;
  isDesktop?: boolean;
  separated?: boolean;
  specialRowHover?: boolean;
  data: ReadonlyArray<IRow>;
  hasButton?: string | boolean;
  headings: ReadonlyArray<IHeading>;
  backgroundColorMap?: ReadonlyArray<BackgroundColorMap>;
}

export interface TableRowProps {
  index: number;
  items: TItems;
  button: ReactNode;
  ordinate?: boolean;
  hasButton: boolean;
  separated?: boolean;
  isDesktop?: boolean;
  bg?: BoxProps['bg'];
  mobileSide: ReactNode;
  handleClick?: () => void;
  specialRowHover?: boolean;
  desktopBg?: BoxProps['bg'];
  headings: ReadonlyArray<IHeading>;
}

export interface TableLoadingProps {
  columns: number;
}

export interface CellProps {
  as: 'td' | 'th';
  tip?: string;
  children?: ReactNode;
}
