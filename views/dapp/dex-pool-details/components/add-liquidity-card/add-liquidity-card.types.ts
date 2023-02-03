import BigNumber from 'bignumber.js';
import { ReactNode } from 'react';
import { Control, UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import { Pool } from '../../dex-pool-details.types';

export interface IAddLiquidityForm {
  token0Amount: string;
  token1Amount: string;
  error: string;
  token0InputLocked: boolean;
  token1InputLocked: boolean;
}

export interface IToken {
  symbol: string;
  Icon: ReactNode;
  decimals: number;
  balance: BigNumber;
  type: string;
}

export interface AddLiquidityCardProps {
  tokens: IToken[];
  fetchingInitialData: boolean;
  refetch: () => Promise<void>;
  pool: Pool;
}

export interface AddLiquidityCardContentProps {
  tokens: AddLiquidityCardProps['tokens'];
  fetchingInitialData: AddLiquidityCardProps['fetchingInitialData'];
  refetch: AddLiquidityCardProps['refetch'];
  control: Control<IAddLiquidityForm>;
  setValue: UseFormSetValue<IAddLiquidityForm>;
  getValues: UseFormGetValues<IAddLiquidityForm>;
}

export interface BalanceErrorProps {
  control: Control<IAddLiquidityForm>;
  balance: string;
  name: Exclude<keyof IAddLiquidityForm, 'error' | 'locked'>;
  symbol: string;
}

export interface ErrorLiquidityMessageProps {
  control: Control<IAddLiquidityForm>;
}

export interface AddLiquidityCardButtonProps {
  getValues: UseFormGetValues<IAddLiquidityForm>;
  refetch: () => Promise<void>;
  tokens: IToken[];
}

export const INPUT_NAMES = ['token0Amount', 'token1Amount'] as Array<
  Exclude<
    keyof IAddLiquidityForm,
    'error' | 'token0InputLocked' | 'token1InputLocked'
  >
>;

export interface AddLiquidityManagerProps {
  setValue: UseFormSetValue<IAddLiquidityForm>;
  control: Control<IAddLiquidityForm>;
  pool: Pool;
  token0: IToken;
  token1: IToken;
}
