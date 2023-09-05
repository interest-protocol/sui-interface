import BigNumber from 'bignumber.js';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { IToken } from '@/views/dapp/dex-pool-details/components/add-liquidity-card/add-liquidity-card.types';

export interface AddLiquidityFieldProps {
  decimals: number;
  balance: BigNumber;
  name: `token${0 | 1}`;
  tokens: ReadonlyArray<IToken>;
  control: Control<{ token0: number; token1: number }>;
  register: UseFormRegister<{ token0: number; token1: number }>;
  setValue: UseFormSetValue<{ token0: number; token1: number }>;
}
