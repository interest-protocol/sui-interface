import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { TTranslatedMessage } from '@/interface';

export interface ShareProps {
  color: string;
  Illustration: FC;
  title: TTranslatedMessage;
  subtitle: TTranslatedMessage;
  description: TTranslatedMessage;
  link?: {
    caption: string;
    url: string;
  };
}

export interface IconWrapperProps {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  shining?: boolean;
  floating?: boolean;
  Icon: FC<SVGProps>;
}
