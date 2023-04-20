import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface SocialWrapperProps {
  link: string;
  Icon: FC<SVGProps>;
}
