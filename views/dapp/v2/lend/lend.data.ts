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

export const MONEY_MARKET_KEYS = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].SUID,
    SUI_TYPE_ARG,
    COIN_TYPE[Network.TESTNET].ETH,
  ],
  [Network.MAINNET]: [],
} as Record<Network, ReadonlyArray<string>>;

// https://pyth.network/developers/price-feed-ids#sui-testnet
export const PYTH_PRICE_FEED_IDS = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    // SUI
    '0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266',
    // ETH
    '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6',
  ],
  [Network.MAINNET]: [],
} as Record<Network, string[]>;

export const PYTH_PRICE_FEED_ID_TO_PRICE_INFO_OBJECT = {
  [Network.DEVNET]: {},
  [Network.TESTNET]: {
    '0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266':
      '0xe38dbe2ff3322f1500fff45d0046101f371eebce47c067c5e9233248c4878c28',
    '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6':
      '0x8deeebad0a8fb86d97e6ad396cc84639da5a52ae4bbc91c78eb7abbf3e641ed6',
  },
  [Network.MAINNET]: {},
} as Record<Network, Record<string, string>>;

export const PYTH_PRICE_CONNECT_URL = {
  [Network.DEVNET]: '',
  [Network.TESTNET]: 'https://xc-testnet.pyth.network',
  [Network.MAINNET]: 'https://xc-mainnet.pyth.network',
} as Record<Network, string>;

export const ORACLE_PRICE_COIN_NAMES = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    '0000000000000000000000000000000000000000000000000000000000000002::sui::SUI',
    'b8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH',
  ],
  [Network.MAINNET]: [],
} as Record<Network, string[]>;

// https://app.switchboard.xyz/sui/testnet
export const SWITCHBOARD_AGGREGATOR_IDS = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    // SUI
    '0x84d2b7e435d6e6a5b137bf6f78f34b2c5515ae61cd8591d5ff6cd121a21aa6b7',
    // ETH
    '0x68ed81c5dd07d12c629e5cdad291ca004a5cd3708d5659cb0b6bfe983e14778c',
  ],
  [Network.MAINNET]: [],
} as Record<Network, string[]>;
