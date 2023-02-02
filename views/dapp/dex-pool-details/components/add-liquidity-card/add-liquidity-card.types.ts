import BigNumber from 'bignumber.js';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';

export interface IAddLiquidityForm {
  token0Amount: string;
  token1Amount: string;
  error: string;
  locked: boolean;
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
}

export interface AddLiquidityCardContentProps {
  tokens: AddLiquidityCardProps['tokens'];
  fetchingInitialData: AddLiquidityCardProps['fetchingInitialData'];
  refetch: AddLiquidityCardProps['refetch'];
  control: Control<IAddLiquidityForm>;
  setValue: UseFormSetValue<IAddLiquidityForm>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  refetch: any;
}

export const INPUT_NAMES = ['token0Amount', 'token1Amount'] as Array<
  Exclude<keyof IAddLiquidityForm, 'error' | 'locked'>
>;
