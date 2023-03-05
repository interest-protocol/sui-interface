import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { SVGProps } from '@/components/svg/svg.types';

export interface IToken {
  name: string;
  symbol: string;
  type: string;
  Icon: FC<SVGProps>;
  decimals: number;
}
export interface IFaucetForm {
  amount: number;
  type: string;
}

export interface FaucetCurrencyDropdownProps {
  defaultValue: string;
  tokens: ReadonlyArray<IToken>;
  onSelectCurrency: (currency: string) => void;
}
export interface FaucetProps {
  form: UseFormReturn<IFaucetForm>;
}
