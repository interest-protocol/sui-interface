import { CoinInfo } from 'interface/sentio';

import { IPool } from '@/views/dapp/dex-pool/pool.types';

export interface TableRowProps {
  title?: string;
  numCols?: 3 | 4 | 5 | 6 | 7;
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
