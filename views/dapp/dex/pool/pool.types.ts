import { Network } from '@interest-protocol/sui-sdk';
import { BigNumber } from 'bignumber.js';
import { useReadLocalStorage } from 'usehooks-ts';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinData } from '@/interface';
export interface PoolRowProps {
  type0: string;
  type1: string;
  symbol0: string;
  symbol1: string;
  objectId: string | null;
  decimals: number;
  balance: BigNumber;
  stable: boolean;
}

export interface IPool {
  token0: CoinData;
  token1: CoinData;
  stable: boolean;
  decimals: number;
  balance: BigNumber;
  poolObjectId: string | null;
}

export interface IPools {
  active: ReadonlyArray<IPool>;
  inactive: ReadonlyArray<IPool>;
}

export interface FormatLpCoinToPoolArgs {
  object: Web3ManagerSuiObject;
  tokensMetadataRecord: ReturnType<typeof useReadLocalStorage>;
  network: Network;
}
