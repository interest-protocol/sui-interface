import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface TotalAssetsMintedInfoProps {
  isDropdownOpen: boolean;
  handleClick: () => void;
  Icon: FC<SVGProps>;
  name: string;
  value: number;
  moreDetails: ReadonlyArray<{ type: string; value: number }>;
}
