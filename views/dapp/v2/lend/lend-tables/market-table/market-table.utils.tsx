import { TOKENS_SVG_MARKET_MAP } from '../svg/market-tables';
export const getSVG = (type: string) => {
  const SVG = TOKENS_SVG_MARKET_MAP[type] ?? TOKENS_SVG_MARKET_MAP.default;
  return <SVG width="2.5rem" maxHeight="100%" maxWidth="2.5rem" />;
};
