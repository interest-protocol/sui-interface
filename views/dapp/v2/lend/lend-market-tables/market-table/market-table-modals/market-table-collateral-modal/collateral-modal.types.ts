import { MoneyMarketRecord } from '@interest-protocol/sui-money-market-sdk';
import { Dispatch, SetStateAction } from 'react';

import { CoinPriceRecord } from '@/hooks';
import { UserBalancesInUSD } from '@/views/dapp/v2/lend/lend.types';

import { Asset } from '../../../lend-table.types';

export interface ResultCollateralModalProps {
  tokenName: string;
  isSuccess: boolean;
  isEnabled: boolean;
  txLink?: string;
}

//000
export interface CollateralModalProps {
  closeModal: () => void;
  asset: Asset;
  resultModal: (result: ResultCollateralModalProps) => void;
  userBalancesInUSD: UserBalancesInUSD;
  mutate: () => Promise<void>;
  setCollateralSwitchState: Dispatch<SetStateAction<boolean>>;
  marketKey: string;
  marketRecord: MoneyMarketRecord;
  priceMap: CoinPriceRecord;
}

//000
export interface LoadingModalProps {
  title: string;
  content: string;
}
