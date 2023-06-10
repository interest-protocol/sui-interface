import { ReactNode } from 'react';

export interface FarmCardProps {
  title: string;
  amount: string;
  shadow?: boolean;
  amountUSD: string;
  button: ReactNode;
}
