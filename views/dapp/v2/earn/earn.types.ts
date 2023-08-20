import { TOKEN_SYMBOL } from '@/lib';

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

export interface EarnPoolItemProps {
  token1: Token;
  token2: Token;
  apr: string;
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
