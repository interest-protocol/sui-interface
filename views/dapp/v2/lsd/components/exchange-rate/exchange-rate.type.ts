type Symbols = 'iSUI' | 'SUI' | 'iSUI-PC' | 'iSUI-YN';

export interface ExchangeRateItemProps {
  to: Symbols;
  from: Symbols;
  finalValue: number;
  initialValue: number;
  hasFirstOverlayIcon?: boolean;
  hasSecondOverlayIcon?: boolean;
}
