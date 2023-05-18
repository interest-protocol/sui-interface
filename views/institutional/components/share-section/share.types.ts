import { BoxProps } from '@interest-protocol/ui-kit';
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
  shining?: boolean;
  floating?: boolean;
  Icon: FC<SVGProps>;
  top?: BoxProps['top'];
  left?: BoxProps['left'];
  right?: BoxProps['right'];
  bottom?: BoxProps['bottom'];
}
