import { Network } from '@interest-protocol/sui-amm-sdk';
import { Dispatch, FC, SetStateAction } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface MenuListItemProps {
  Icon: FC<SVGProps>;
  name: string;
  path: string;
  disabled: boolean;
  networks: ReadonlyArray<Network>;
  alpha?: boolean;
  accordionList?: ReadonlyArray<AccordionItemProps>;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  isCollapsed: boolean;
  index?: number;
}

export interface MenuListItemTextProps {
  Icon: FC<SVGProps>;
  name: string;
  path: string;
  disabled: boolean;
  accordionList?: ReadonlyArray<AccordionItemProps>;
  isCollapsed: boolean;
}

export interface AccordionItemProps {
  name: string;
  path: string;
  networks: ReadonlyArray<Network>;
}

export interface MenuListProps {
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  isCollapsed: boolean;
}

export interface SideBarHeaderProps {
  isCollapsed: boolean;
}

export interface SideBarFooterProps {
  isCollapsed: boolean;
}
