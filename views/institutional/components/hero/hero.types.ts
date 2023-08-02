import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface CubeWrapperProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  Icon: FC<SVGProps>;
  withTopShadow?: boolean;
  withBottomShadow?: boolean;
  specialShadow?: boolean;
  withFixedTopShadow?: boolean;
}

export interface HeroStarWrapperProps extends CubeWrapperProps {
  size: '15%' | '20%' | '30%';
}

export interface HeroBlockProps {
  scale?: number | string;
}
