import { DERIVATED_SUI_SYMBOL } from '../lst.types';

export interface NFTRowItemProps {
  id: number;
  value: {
    coin: number;
    inUSD: number;
  };
}

export interface NFTListProps {
  data: ReadonlyArray<NFTRowItemProps>;
}

export interface OpenDetailsProps {
  isOpen: boolean;
  handleClick: () => void;
}

export interface TokensRowItemProps {
  tokens: [DERIVATED_SUI_SYMBOL, DERIVATED_SUI_SYMBOL];
  value: {
    coin: number;
    inUSD: number;
  };
  moreDetails: ReadonlyArray<{ type: string; value: number }>;
}

export interface TokensListProps {
  data: ReadonlyArray<TokensRowItemProps>;
}
