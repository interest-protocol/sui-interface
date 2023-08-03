import { Network } from '@interest-protocol/sui-amm-sdk';
import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface MenuListItemProps {
  Icon: FC<SVGProps>;
  name: string;
  path: string;
  disabled: boolean;
  networks: ReadonlyArray<Network>;
  alpha?: boolean;
  accordionList?: ReadonlyArray<AccordionItemProps>;
}

export interface AccordionItemProps {
  name: string;
  path: string;
}
