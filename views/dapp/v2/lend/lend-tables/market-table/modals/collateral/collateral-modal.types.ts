import { Dispatch, SetStateAction } from 'react';

import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarket,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { AssetData } from '../../../lend-table.types';

export interface ResultCollateralModalProps {
  tokenName: string;
  isSuccess: boolean;
  isEnabled: boolean;
  txLink?: string;
}

//000
export interface CollateralModalProps {
  closeModal: () => void;
  assetData: AssetData;
  resultModal: (result: ResultCollateralModalProps) => void;
  userBalancesInUSD: UserBalancesInUSD;
  mutate: () => Promise<void>;
  setCollateralSwitchState: Dispatch<SetStateAction<boolean>>;
  marketKey: string;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
}

//000
export interface LoadingModalProps {
  title: string;
  content: string;
}
