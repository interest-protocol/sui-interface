import BigNumber from 'bignumber.js';
import { UseFormReturn } from 'react-hook-form';

export interface StakeFormProps {
  amount: string;
  amountUSD: string;
  validator: string;
}

export interface ValidatorSelectProps {
  form: UseFormReturn<StakeFormProps>;
}

export interface StakeInputProps {
  suiPrice: number;
  exchangeRate: number;
  totalBalance: BigNumber;
  form: UseFormReturn<StakeFormProps>;
}
