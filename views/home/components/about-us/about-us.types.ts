import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface AboutUsCardProps {
  name: 'earn' | 'trade' | 'lend';
  link: string;
  Illustration: FC;
}

export interface FloatingWrapperProps {
  width: string;
  height: string;
  Icon: FC<SVGProps>;
  isStar?: boolean;
}
