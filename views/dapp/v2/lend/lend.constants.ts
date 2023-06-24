import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';
import { SUI_TYPE_ARG } from '@mysten/sui.js';

export const COIN_PRICE_KEYS = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [COIN_TYPE[Network.TESTNET].ETH, SUI_TYPE_ARG],
  [Network.MAINNET]: [],
} as Record<Network, ReadonlyArray<string>>;
