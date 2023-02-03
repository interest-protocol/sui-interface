import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface SwapMessageProps {
  color?: string;
  message: string;
  Icon: FC<SVGProps>;
  extraData?: Record<string, string>;
}
