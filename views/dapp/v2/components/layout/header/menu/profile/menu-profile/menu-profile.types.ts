import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface WalletActivityItemProps {
  id: string;
  description: string;
  Icon: FC<SVGProps>;
  date: string;
}

export interface WalletTokenItemProps {
  Icon: FC<SVGProps>;
}
