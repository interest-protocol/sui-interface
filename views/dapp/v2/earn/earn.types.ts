import { Network } from '@interest-protocol/sui-amm-sdk';
import BigNumber from 'bignumber.js';
import { useReadLocalStorage } from 'usehooks-ts';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { FarmMetadataType } from '@/constants';
import { CoinPriceRecord } from '@/hooks';
import { CoinData, Farm, Pool } from '@/interface';
import { TOKEN_SYMBOL } from '@/lib';

export interface IPXStorage {
  ipxPerMS: string;
  ipxSupply: string;
  startTimestamp: string;
  totalAllocation: string;
}

export interface Token {
  symbol: TOKEN_SYMBOL.SUI;
  type: string;
  name: string;
}

export interface EarnHeaderOptionProps {
  isFarm?: boolean;
  isStable: boolean;
}

export interface EarnContainerProps {
  columns: number;
}

export interface EarnPositionItemProps {
  token1: Token;
  token2: Token;
  apr: string;
  fee: string;
  liquidity: {
    token1: string;
    token2: string;
  };
  farmIPX?: string;
  headerOption: EarnHeaderOptionProps;
}

export interface EarnCardTokenIconProps {
  types: [string, string];
  isSingleCoin: boolean;
}

export interface EarnFiltersProps {
  handleClose: () => void;
}

export interface AccordionProps {
  title: string;
  options: ReadonlyArray<AccordionOptionProps>;
}

export interface AccordionOptionProps {
  description: string;
  defaultState: boolean;
  descriptionConfig?: { count: number };
}

export interface EarnHeaderProps {
  isPool: boolean;
  handleTab: () => void;
}

export interface IPool {
  stable: boolean;
  token0: CoinData;
  token1: CoinData;
  decimals: number;
  balance: BigNumber;
  poolObjectId: string | null;
}

export type IPools = ReadonlyArray<IPool>;

export interface FormatLpCoinToPoolArgs {
  object: Web3ManagerSuiObject;
  tokensMetadataRecord: ReturnType<typeof useReadLocalStorage>;
  network: Network;
}

export interface ParseDataArgs {
  farms: ReadonlyArray<Farm>;
  pools: ReadonlyArray<Pool>;
  prices: CoinPriceRecord;
  ipxStorage: IPXStorage;
  network: Network;
}

export interface SafeFarmData extends FarmMetadataType {
  tvl: number;
  apr: BigNumber;
  loading?: boolean;
  accountBalance: BigNumber;
  allocationPoints: BigNumber;
  totalStakedAmount: BigNumber;
  totalAllocationPoints: BigNumber;
}

export interface PoolCardProps extends SafeFarmData {
  isPool: boolean;
}

export interface ParseFarmDataArgs {
  prices: CoinPriceRecord;
  ipxUSDPrice: number;
  ipxStorage: IPXStorage;
  pools: ReadonlyArray<Pool>;
  farms: ReadonlyArray<Farm>;
  type: string;
  index: number;
  network: Network;
}

export interface ParseFarmDataReturn {
  farms: ReadonlyArray<SafeFarmData>;
  totalAllocationPoints: BigNumber;
}
