import { CoinData } from '@/interface';

import { EarnHeaderOptionProps } from '../earn/earn.types';

export interface PoolCardWrapperProps {
  type: 'add' | 'remove';
  disabled?: boolean;
  action?: () => void;
  reset?: () => void;
}

export interface AddPreviewModalProps {
  handleClose: () => void;
}

export interface FarmCardWrapperProps {
  type: 'staked' | 'unstaked' | 'rewards';
  disabled?: boolean;
  action?: () => void;
  reset?: () => void;
}

export interface FarmCardProps extends FarmCardWrapperProps {
  coin: CoinData;
  amount: string;
  balance: string;
  currentAmount?: string;
}

export interface RowTokenFieldProps {
  coins: ReadonlyArray<CoinData>;
  amount: string;
  balance: string;
}

export interface TokenDescriptionProps {
  coin: CoinData;
  amount: string;
}

export interface RewardRowProps {
  coin: CoinData;
  amount: string;
  currentAmount: string;
  balance: string;
}

export interface DetailedHeaderProps {
  coins: ReadonlyArray<CoinData>;
  headerOption: EarnHeaderOptionProps;
}
