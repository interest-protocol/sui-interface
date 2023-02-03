import BigNumber from 'bignumber.js';
import { ReactNode } from 'react';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';

interface TokenData {
  symbol: string;
  Icon: ReactNode;
  decimals: number;
  type: string;
}

export interface RemoveLiquidityCardProps {
  isStable: boolean;
  tokens: TokenData[];
  lpToken: Web3ManagerSuiObject;
  isFetchingInitialData: boolean;
  refetch: () => Promise<void>;
}

export interface RemoveLiquidityCardContentProps {
  isStable: boolean;
  tokens: TokenData[];
  isFetchingInitialData: boolean;
  refetch: () => Promise<void>;
  lpAmountControl: Control<IRemoveLiquidityForm>;
  resetLpAmount: () => void;
  getLpAmount: () => string;
  lpToken: Web3ManagerSuiObject;
}

export interface IRemoveLiquidityForm {
  lpAmount: string;
}

export interface InputBalanceProps {
  balance: string;
  disabled?: boolean;
  currencyPrefix: ReactNode;
  name: keyof IRemoveLiquidityForm;
  register: UseFormRegister<IRemoveLiquidityForm>;
  setValue: UseFormSetValue<IRemoveLiquidityForm>;
}

export interface LinearLoaderProps {
  loading: boolean;
}

export interface RemoveLiquidityButtonProps {
  getLpAmount: () => string;
  token0Amount: BigNumber;
  token1Amount: BigNumber;
  refetch: () => Promise<void>;
  isFetching: boolean;
  objectIds: ReadonlyArray<string>;
  token0: TokenData;
  token1: TokenData;
}

export interface TokenAmountProps {
  Icon: TokenData['Icon'];
  amount: string;
  symbol: string;
  isFetchingInitialData: boolean;
}

export interface UseGetRemoveLiquidityAmountsArgs {
  lpAmount: string;
  token0Type: string;
  token1Type: string;
  account: string | null;
  objectIds: ReadonlyArray<string>;
}
