import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { BTCSVG } from '@/components/svg/v2';

export interface TransactionDataProps {
  date: string;
  Icon: FC<
    SVGProps & {
      filled?: boolean | undefined;
    }
  >;
  id: string;
  description: string;
}

export const TRANSACTIONS_DATA: ReadonlyArray<TransactionDataProps> = [
  {
    date: 'August • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'August • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'August • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'August • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'August • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'June • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'June • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Random Action',
  },
  {
    date: 'May • 2023',
    Icon: BTCSVG,
    id: '5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9',
    description: 'Last Action',
  },
];
