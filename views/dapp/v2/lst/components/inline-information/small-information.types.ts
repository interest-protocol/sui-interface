import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface InlineInformationProps {
  bg?: string;
  color?: string;
  Icon: FC<SVGProps>;
  description: string;
  value: number | string;
}
