import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import ETH from '@/components/svg/v2/eth';

export interface MidCardsDataProps {
  title: string;
  description?: string;
  icon: FC<SVGProps & { filled?: boolean | undefined }>;
  value?: string;
  price?: string;
  currency?: string;
}

export const ASSETS_CARD_POOL_DATA: ReadonlyArray<MidCardsDataProps> = [
  {
    title: 'ETH',
    icon: ETH,
    value: '0.00',
    price: '0.00',
    currency: 'USD',
  },
  {
    title: 'ETH',
    icon: ETH,
    value: '0.00',
    price: '0.00',
    currency: 'USD',
  },
  {
    title: 'ETH',
    icon: ETH,
    value: '0.00',
    price: '0.00',
    currency: 'USD',
  },
  {
    title: 'ETH',
    icon: ETH,
    value: '0.00',
    price: '0.00',
    currency: 'USD',
  },
  {
    title: 'ETH',
    icon: ETH,
    value: '0.00',
    price: '0.00',
    currency: 'USD',
  },
];

export const ACTIVITY_CARD_POOL_DATA: ReadonlyArray<MidCardsDataProps> = [
  {
    title: 'Type of Tran.',
    icon: ETH,
    description: 'dd/mm/yy',
  },
  {
    title: 'Type of Tran.',
    icon: ETH,
    description: 'dd/mm/yy',
  },
  {
    title: 'Type of Tran.',
    icon: ETH,
    description: 'dd/mm/yy',
  },
  {
    title: 'Type of Tran.',
    icon: ETH,
    description: 'dd/mm/yy',
  },
  {
    title: 'Type of Tran.',
    icon: ETH,
    description: 'dd/mm/yy',
  },
];
