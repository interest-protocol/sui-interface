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

export interface TransactionData {
  id: {
    txDigest: string;
    eventSeq: string;
  };
  packageId: string;
  transactionModule: string;
  sender: string;
  type: string;
  parsedJson?: Record<string, any> | undefined;
  bcs?: string | undefined;
  timestampMs?: string | undefined;
}

export type ParsedData = Record<
  string,
  ReadonlyArray<{
    date: Date;
    type: string;
    txId: string;
    packageId: string;
  }>
>;
