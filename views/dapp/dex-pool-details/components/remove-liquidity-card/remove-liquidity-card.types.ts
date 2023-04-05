import BigNumber from 'bignumber.js';
import { ReactNode } from 'react';
import { Control, UseFormReturn } from 'react-hook-form';

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
  refetch: () => Promise<void>;
  lpToken: Web3ManagerSuiObject;
  formRemoveLiquidity: UseFormReturn<IRemoveLiquidityForm>;
}

export interface RemoveLiquidityCardContentProps {
  isStable: boolean;
  tokens: TokenData[];
  resetLpAmount: () => void;
  getLpAmount: () => string;
  refetch: () => Promise<void>;
  lpToken: Web3ManagerSuiObject;
  lpAmountControl: Control<IRemoveLiquidityForm>;
}

export interface IRemoveLiquidityForm {
  lpAmount: string;
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
  resetLpAmount: () => void;
}

export interface TokenAmountProps {
  Icon: TokenData['Icon'];
  amount: string;
  symbol: string;
}

export interface UseGetRemoveLiquidityAmountsArgs {
  lpAmount: string;
  token0Type: string;
  token1Type: string;
  account: string | null;
  objectIds: Array<string>;
}
