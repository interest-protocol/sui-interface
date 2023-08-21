import { Network, Pool } from '@interest-protocol/sui-amm-sdk';
import BigNumber from 'bignumber.js';

import { CoinPriceRecord } from '@/hooks';
import { Farm } from '@/interface';
import { TOKEN_SYMBOL } from '@/lib';

import { IPXStorage } from '../../liquidity-farms-details/liquidity-farms-details.hooks';

export interface Token {
  symbol: TOKEN_SYMBOL.SUI;
  type: string;
  name: string;
}

export interface EarnHeaderOptionProps {
  isVolatile?: boolean;
  isFarm?: boolean;
  isStable?: boolean;
}

export interface EarnContainerProps {
  columns: number;
}

export interface EarnPoolItemProps {
  coin0: Token;
  coin1: Token;
  apr: BigNumber;
  fee: string;
  liquidity: string;
  volume: string;
  allocation: string;
  headerOption: EarnHeaderOptionProps;
}

export interface EarnPositionItemProps {
  token1: Token;
  token2: Token;
  apr: string;
  fee: string;
  liquidity: {
    token1: string;
    token2: string;
  };
  farmIPX?: string;
  headerOption: EarnHeaderOptionProps;
}

export interface EarnCardTokenIconProps {
  type: string;
}

export interface EarnFiltersProps {
  handleClose: () => void;
}

export interface AccordionProps {
  title: string;
  options: ReadonlyArray<AccordionOptionProps>;
}

export interface AccordionOptionProps {
  description: string;
  defaultState: boolean;
  descriptionConfig?: { count: number };
}

export interface EarnHeaderProps {
  isPool: boolean;
  handleTab: () => void;
}

export interface ParseDataArgs {
  farms: ReadonlyArray<Farm>;
  pools: ReadonlyArray<Pool>;
  prices: CoinPriceRecord;
  ipxStorage: IPXStorage;
  network: Network;
}
