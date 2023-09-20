import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface InlineInformationProps {
  description: string;
  value: number | string;
  Icon: FC<SVGProps>;
}
