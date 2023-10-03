import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

import { DERIVATED_SUI_SYMBOL } from '../lst.types';

interface MoreDetailsProps {
  type: string;
  value: number;
}

interface TotalAssetsMintedProps {
  name: string;
  value: number;
  Icon: FC<SVGProps>;
  moreDetails: ReadonlyArray<MoreDetailsProps>;
}

export interface AssetsRowItemProps {
  maturity: string;
  dayLeft: number;
  totalAssetsMinted: ReadonlyArray<TotalAssetsMintedProps>;
}

export interface AssetsListProps {
  data: ReadonlyArray<AssetsRowItemProps>;
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
