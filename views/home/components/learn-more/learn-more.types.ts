import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface LearnMoreProps {
  name: 'documentation' | 'ourTeam' | 'mediaKit';
  type?: 'big';
  Icon: FC<SVGProps>;
  link: string;
}
