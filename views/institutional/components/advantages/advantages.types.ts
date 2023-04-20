import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface AdvantagesCardProps {
  name: 'rewards' | 'profits' | 'fees';
  Illustration: FC;
}
export interface IconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  shining?: boolean;
  Icon: FC<SVGProps>;
  floating?: boolean;
  hittingTheFloor?: boolean;
}
