import { UseFormReturn } from 'react-hook-form';

import { IAddLiquidityForm } from './components/add-liquidity-card/add-liquidity-card.types';
import { IRemoveLiquidityForm } from './components/remove-liquidity-card/remove-liquidity-card.types';

export interface DEXPoolDetailsViewProps {
  objectId: string;
  formAddLiquidity: UseFormReturn<IAddLiquidityForm>;
  formRemoveLiquidity: UseFormReturn<IRemoveLiquidityForm>;
}

export interface LiquidityDetailsCardLineProps {
  value: string;
  symbol: string;
  type: string;
}

export interface LiquidityDetailsCardProps {
  isStable: boolean;
  lines: ReadonlyArray<LiquidityDetailsCardLineProps>;
}

export interface Pool {
  token0Balance: string;
  token1Balance: string;
  lpCoinSupply: string;
  lpCoin: string;
  poolType: string;
  stable: boolean;
  token0Type: string;
  token1Type: string;
}
