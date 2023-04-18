import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface UsedByCardProps {
  color: string;
  title: string;
  value: string;
  Icon: FC<SVGProps>;
  description: string;
  mobileHalf?: boolean;
}
