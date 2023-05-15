import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { TTranslatedMessage } from '@/interface';

export interface RewardDistributionIconWrapperProps {
  size: string;
  top?: string | Array<string>;
  left?: string | Array<string>;
  right?: string | Array<string>;
  chock?: boolean;
  bottom?: string | Array<string>;
  shadow?: boolean;
  floating?: boolean;
  shinning?: boolean;
  Icon: FC<SVGProps>;
  to?: [number, number];
  floatingStar?: boolean;
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
