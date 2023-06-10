import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface PoolWrapperProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  Icon: FC<SVGProps>;
}

export interface HeroStarWrapperProps extends PoolWrapperProps {
  size: '15%' | '20%' | '30%';
}
