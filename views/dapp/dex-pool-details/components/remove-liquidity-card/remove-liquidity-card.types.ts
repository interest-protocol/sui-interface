import BigNumber from 'bignumber.js';
import { ReactNode } from 'react';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface TokenData {
  symbol: string;
  Icon: ReactNode;
  decimals: number;
  type: string;
}

export interface RemoveLiquidityCardProps {
  isStable: boolean;
  tokens: TokenData[];
  lpBalance: BigNumber;
  isFetchingInitialData: boolean;
  refetch: () => Promise<void>;
}

export interface RemoveLiquidityCardContentProps {
  isStable: boolean;
  tokens: TokenData[];
  lpBalance: BigNumber;
  isFetchingInitialData: boolean;
  refetch: () => Promise<void>;
  control: Control<IRemoveLiquidityForm>;
  setValue: UseFormSetValue<IRemoveLiquidityForm>;
}

export interface IRemoveLiquidityForm {
  loading: boolean;
  removeLoading: boolean;
  lpAmount: string;
  token0Amount: string;
  token1Amount: string;
}

export interface InputBalanceProps {
  balance: string;
  disabled?: boolean;
  currencyPrefix: ReactNode;
  name: keyof IRemoveLiquidityForm;
  register: UseFormRegister<IRemoveLiquidityForm>;
  setValue: UseFormSetValue<IRemoveLiquidityForm>;
  control: Control<IRemoveLiquidityForm>;
}

export interface LinearLoaderProps {
  control: Control<IRemoveLiquidityForm>;
}

export interface ApproveButtonProps {
  control: Control<IRemoveLiquidityForm>;
  symbol0: string;
  symbol1: string;
}

export interface RemoveLiquidityButtonProps {
  control: Control<IRemoveLiquidityForm>;
  disabled: boolean;
}

export interface TokenAmountProps {
  Icon: TokenData['Icon'];
  control: Control<IRemoveLiquidityForm>;
  symbol: string;
  name: Exclude<keyof IRemoveLiquidityForm, 'lpAmount'>;
  isFetchingInitialData: boolean;
}

export interface RemoveLiquidityManagerProps {
  setValue: UseFormSetValue<IRemoveLiquidityForm>;
  control: Control<IRemoveLiquidityForm>;
  isStable: boolean;
  token0Address: string;
  token1Address: string;
  token0Decimals: number;
  token1Decimals: number;
  chainId: number;
}

export interface UseRemoveLiquidityArgs {
  tokens: TokenData[];
  control: Control<IRemoveLiquidityForm>;
  lpBalance: string;
  chainId: number;
  account: string;
  isStable: boolean;
}
