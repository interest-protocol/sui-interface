import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { TTranslatedMessage } from '@/interface';

export interface APRCardProps {
  trend: number;
  amount: string;
  Icon: FC<SVGProps>;
  disabled?: boolean;
  isLoading?: boolean;
  description: TTranslatedMessage | string;
}
export interface APRCardTrendInfoProps {
  value: number;
}
