import { FC } from 'react';

export interface ShareProps {
  title: string;
  subtitle: string;
  description: string;
  hasLink?: {
    caption: string;
    url: string;
  };
  Illustration: FC;
  color: string;
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
