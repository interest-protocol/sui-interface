import { ReactNode } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { IAddLiquidityForm } from '../add-liquidity-card.types';

export interface InputBalanceProps {
  balance: string;
  disabled?: boolean;
  currencyPrefix: ReactNode;
  name: keyof IAddLiquidityForm;
  register: UseFormRegister<IAddLiquidityForm>;
  setValue: UseFormSetValue<IAddLiquidityForm>;
}
