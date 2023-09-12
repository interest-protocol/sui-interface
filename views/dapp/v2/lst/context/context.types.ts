import { CoinUSDInfo } from '@/hooks/use-get-coins-usd-info';
import {
  LstStorage,
  ValidatorStakePosition,
} from '@/views/dapp/v2/lst/lst.types';

export interface ILSTContext {
  suiCoinInfo: CoinUSDInfo | null;
  last30daysPrice: ReadonlyArray<Pick<CoinUSDInfo, 'timestamp' | 'price'>>;
  lstStorage: LstStorage;
  validatorStakeRecord: Record<string, ValidatorStakePosition>;
  isLoading: boolean;
  iSuiExchangeRate: number;
  totalISuiMinted: number;
}
