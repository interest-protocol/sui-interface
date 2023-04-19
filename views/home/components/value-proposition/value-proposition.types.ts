import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface ValuePropositionIconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  floating?: boolean;
  Icon: FC<SVGProps>;
  to?: [number, number];
}
