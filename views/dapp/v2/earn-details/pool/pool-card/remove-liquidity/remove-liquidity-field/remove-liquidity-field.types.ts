import BigNumber from 'bignumber.js';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { IToken } from '@/views/dapp/dex-pool-details/components/add-liquidity-card/add-liquidity-card.types';

export interface RemoveLiquidityFieldProps {
  decimals: number;
  balance: BigNumber;
  control: Control<{ lpCoin: string }>;
  register: UseFormRegister<{ lpCoin: string }>;
  setValue: UseFormSetValue<{ lpCoin: string }>;
  tokens: ReadonlyArray<Omit<IToken, 'balance'>>;
}
