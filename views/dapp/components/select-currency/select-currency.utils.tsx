import { v4 } from 'uuid';

import { TOKENS_SVG_MAP } from '@/constants';
import { asyncNoop } from '@/utils';

import CurrencyTokenItem from './currency-token-item';
import { RenderData } from './select-currency.types';

export const renderData: RenderData = (
  tokens,
  onSelectCurrency,
  currentToken,
  isSearching = false,
  noBalance = false,
  addLocalToken = asyncNoop,
  removeLocalToken = undefined
) => {
  const DefaultTokenSVG = TOKENS_SVG_MAP.default;

  return tokens.map(({ type, symbol, decimals, totalBalance }) => (
    <CurrencyTokenItem
      key={v4()}
      type={type}
      symbol={symbol}
      decimals={decimals}
      noBalance={noBalance}
      isSearching={isSearching}
      currentToken={currentToken}
      totalBalance={totalBalance}
      addLocalToken={addLocalToken}
      DefaultTokenSVG={DefaultTokenSVG}
      onSelectCurrency={onSelectCurrency}
      removeLocalToken={removeLocalToken}
    />
  ));
};
