import { FC, ReactNode } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface BenefitsCardProps {
  title: string;
  description: ReactNode;
  Icon: FC<SVGProps>;
  colorBase: string;
  hasLink?: {
    caption: string;
    url: string;
  };
}
