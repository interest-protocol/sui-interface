import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface TokenModalItemProps {
  symbol: string;
  balance: string;
  address: string;
  onClick: () => void;
  recommended?: boolean;
  favoriteTokens: ReadonlyArray<string>;
  Icon: FC<SVGProps & { filled?: boolean }>;
  setFavorites: (value: ReadonlyArray<string>) => void;
}
