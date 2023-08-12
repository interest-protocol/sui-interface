import { CoinInfo } from 'interface/sentio';

import { IPool } from '@/views/dapp/dex-pool/pool.types';

export interface TableRowProps {
  title?: string;
  numCols: 5 | 7;
  isTableHead?: boolean;
}

export interface TableHeadProps {
  title: string;
}

export interface TopPoolsTableItem
  extends Record<'a' | 'b' | 'c' | 'd', number> {
  pool: IPool | undefined;
}

export interface TopCoinTableItem extends Record<'a' | 'b' | 'c', number> {
  coin: CoinInfo | undefined;
}
