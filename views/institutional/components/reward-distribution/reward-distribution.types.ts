import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { TTranslatedMessage } from '@/interface';

export interface RewardDistributionIconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  chock?: boolean;
  bottom?: string;
  shadow?: boolean;
  floating?: boolean;
  Icon: FC<SVGProps>;
  to?: [number, number];
}

export interface BenefitsCardProps {
  title: TTranslatedMessage;
  description: TTranslatedMessage;
  Icon: FC<SVGProps>;
  colorBase: string;
  link?: {
    caption: string;
    url: string;
  };
}