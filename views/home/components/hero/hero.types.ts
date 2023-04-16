import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface CubeWrapperProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  Icon: FC<SVGProps>;
}
