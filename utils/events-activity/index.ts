import { Network, OBJECT_RECORD } from '@interest-protocol/sui-amm-sdk';
import { MONEY_MARKET_OBJECTS } from '@interest-protocol/sui-money-market-sdk';

export const isIPXPackage = (x: string, network: Network) => {
  return (
    x === OBJECT_RECORD[network].DEX_PACKAGE_ID ||
    MONEY_MARKET_OBJECTS[network].MONEY_MARKET_PACKAGE_ID
  );
};

export const parseIPXEvents = (type: string) => {};
