import { Network } from '@interest-protocol/sui-amm-sdk';
import { Dispatch, FC, SetStateAction } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
export interface MenuItemCollapsibleProps {
  accordionList?: ReadonlyArray<AccordionItemProps>;
}

export interface MenuItemTitleContentProps extends MenuItemCollapsibleProps {
  name: string;
  path: string;
  disabled: boolean;
  Icon: FC<SVGProps>;
  isCollapsed: boolean;
}

export interface MenuItemProps extends MenuItemTitleContentProps {
  alpha?: boolean;
  networks: ReadonlyArray<Network>;
  setIsCollapsed: (value: boolean) => void;
  setTemporarilyOpen: Dispatch<SetStateAction<boolean>>;
}
export interface MenuMobileItemProps
  extends Omit<MenuItemProps, 'setTemporarilyOpen'> {
  index: number;
}

export interface MenuListItemTextProps {
  name: string;
  path: string;
  disabled: boolean;
  Icon: FC<SVGProps>;
  isCollapsed: boolean;
  accordionList?: ReadonlyArray<AccordionItemProps>;
}

export interface AccordionItemProps {
  name: string;
  path: string;
  networks: ReadonlyArray<Network>;
}

export interface MenuListProps
  extends Pick<MenuItemProps, 'setIsCollapsed' | 'setTemporarilyOpen'> {
  isCollapsed: boolean;
}

export interface SidebarLogoProps {
  isCollapsed: boolean;
}

export interface SidebarCollapseButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}
