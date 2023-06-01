import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { CoinData } from '@/interface';

export interface TokenModalItemProps {
  type: string;
  symbol: string;
  balance: string;
  selected: boolean;
  onClick: () => void;
  recommended?: boolean;
  favoriteTokens: ReadonlyArray<string>;
  Icon: FC<SVGProps & { filled?: boolean }>;
  setFavorites: (value: ReadonlyArray<string>) => void;
}

export interface SelectTokenProps {
  type: string;
  onSelectToken: (token: CoinData) => void;
}

export interface SelectTokenModalProps extends SelectTokenProps {
  closeModal: () => void;
}
