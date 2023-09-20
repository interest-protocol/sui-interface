import { CoinUSDInfo } from '@/hooks/use-get-coins-usd-info';
import {
  LstStorage,
  ValidatorStakePositionRecord,
} from '@/views/dapp/v2/lst/lst.types';

export interface ILSTContext {
  suiCoinInfo: CoinUSDInfo | null;
  last30daysPrice: ReadonlyArray<Pick<CoinUSDInfo, 'timestamp' | 'price'>>;
  lstStorage: LstStorage;
  validatorStakeRecord: ValidatorStakePositionRecord;
  isLoading: boolean;
  iSuiExchangeRate: number;
  totalISuiMinted: number;
  mutate: () => Promise<void>;
}
