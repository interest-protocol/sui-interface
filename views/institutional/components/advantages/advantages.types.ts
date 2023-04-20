import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface AdvantagesCardProps {
  name: 'rewards' | 'profits' | 'fees';
}
export interface IconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  shining?: boolean;
  goDownStairs?: boolean;
  hittingTheFloor?: boolean;
  floating?: boolean;
  Icon: FC<SVGProps>;
}
