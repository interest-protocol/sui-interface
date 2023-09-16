import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface SelectAssetProps {
  handleClose: () => void;
}

export interface AssetsTableDataItemProps {
  name: string;
  index: number;
  balance: string;
  maturity: string;
  daysLeft: number;
  Icon: FC<SVGProps>;
  inMaturityState: boolean;
}
