import BigNumber from 'bignumber.js';

export interface WalletActivityItemProps {
  id: string;
  description: string;
}

export interface WalletTokenItemProps {
  symbol: string;
  totalBalance: BigNumber;
  balance: string;
}
