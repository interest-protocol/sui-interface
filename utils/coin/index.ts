export const addCoinTypeToTokenType = (x: string): string =>
  `0x2::coin::Coin<${x}>`;
