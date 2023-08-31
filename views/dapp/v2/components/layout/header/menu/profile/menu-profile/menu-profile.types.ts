import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface WalletTabItemProps {
  id: string;
  description: string;
  Icon: FC<SVGProps>;
  date: string;
}
