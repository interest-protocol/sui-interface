import { v4 } from 'uuid';

import { TOKENS_SVG_MAP } from '@/constants';

import CurrencyTokenItem from './currency-token';
import { RenderData } from './select-currency.types';

export const renderData: RenderData = ({ tokens, ...props }) => {
  const DefaultTokenSVG = TOKENS_SVG_MAP.default;

  return tokens.map((tokenProps) => (
    <CurrencyTokenItem
      key={v4()}
      {...props}
      {...tokenProps}
      DefaultTokenSVG={DefaultTokenSVG}
    />
  ));
};
