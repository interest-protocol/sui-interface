import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface RewardDistributionIconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  chock?: boolean;
  bottom?: string;
  shadow?: boolean;
  floating?: boolean;
  Icon: FC<SVGProps>;
  to?: [number, number];
}
