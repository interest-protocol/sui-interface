import { Dispatch, ReactNode, SetStateAction } from 'react';

import { BoxProps } from '../box/box.types';

export interface IDropdownData {
  value: string;
  disabled?: boolean;
  noSelectable?: boolean;
  onSelect?: () => void;
  displayTitle?: ReactNode;
  displayOption: ReactNode;
}

export interface DropdownItemProps extends Omit<IDropdownData, 'value'> {
  minWidth?: string;
  setter: () => void;
  isSelected: boolean;
  customItem?: boolean;
  closeDropdown?: () => void;
  bg?: string;
  bgSelected?: string;
}

export interface DropdownProps {
  bg?: string;
  search?: string;
  bottom?: boolean;
  title: ReactNode;
  minWidth?: string;
  suffix?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  bgSelected?: string;
  fromRight?: boolean;
  buttonMode?: boolean;
  emptyMessage?: string;
  customItems?: boolean;
  customTitle?: boolean;
  mode: 'select' | 'menu';
  staticPosition?: boolean;
  defaultValue?: ReactNode;
  wrapperProps?: BoxProps;
  data: ReadonlyArray<IDropdownData>;
  callback?: (isOpen: boolean) => void;
}

export interface DropdownListProps {
  search?: string;
  isOpen: boolean;
  bottom?: boolean;
  minWidth?: string;
  header?: ReactNode;
  footer?: ReactNode;
  fromRight?: boolean;
  emptyMessage?: string;
  customItems?: boolean;
  customTitle?: boolean;
  selectedIndex: number;
  wrapperProps?: BoxProps;
  dropdownWrapperId: string;
  toggleDropdown: () => void;
  data: ReadonlyArray<IDropdownData>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  bg?: string;
  bgSelected?: string;
}
