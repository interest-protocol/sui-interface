import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { FormattedNumber } from '@/interface';

export interface UsedByCardProps {
  color: string;
  title: string;
  Icon: FC<SVGProps>;
  description: string;
  mobileHalf?: boolean;
  value: FormattedNumber;
}
