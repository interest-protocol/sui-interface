import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface APRCardProps {
  trend: number;
  amount: string;
  Icon: FC<SVGProps>;
  disabled?: boolean;
  isLoading?: boolean;
  description: string;
}
export interface APRCardTrendInfoProps {
  value: number;
}
