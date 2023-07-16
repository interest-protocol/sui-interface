import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';
import { SUI_TYPE_ARG } from '@mysten/sui.js';

export const COIN_PRICE_KEYS = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [COIN_TYPE[Network.TESTNET].ETH, SUI_TYPE_ARG],
  [Network.MAINNET]: [],
} as Record<Network, ReadonlyArray<string>>;

export const SUPPLY_MARKETS_UI = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [SUI_TYPE_ARG, COIN_TYPE[Network.TESTNET].ETH],
  [Network.MAINNET]: [],
} as Record<Network, ReadonlyArray<string>>;

export const BORROW_MARKETS_UI = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].SUID,
    SUI_TYPE_ARG,
    COIN_TYPE[Network.TESTNET].ETH,
  ],
  [Network.MAINNET]: [],
} as Record<Network, ReadonlyArray<string>>;
