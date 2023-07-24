import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface TopInfoCardsProps {
  Icon: FC<SVGProps>;
  description: string;
  amount: number;
}
