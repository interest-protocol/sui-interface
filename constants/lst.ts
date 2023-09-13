import { Network } from '@interest-protocol/sui-amm-sdk';
import { Rebase } from '@interest-protocol/sui-money-market-sdk';

import { ZERO_BIG_NUMBER } from '@/utils';
import { LstStorage } from '@/views/dapp/v2/lst/lst.types';

export const LST_OBJECTS = {
  [Network.DEVNET]: {
    ISUI_METADATA:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_PRINCIPAL_METADATA:
      '0x08203c65dc9ba6aa1146c99307b6db7f2290cca33423eb8956938777fcc5d49d',
    ISUI_YIELD_METADATA:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    POOL_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    REVIEWS_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_PRINCIPAL_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_YIELD_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  [Network.TESTNET]: {
    ISUI_METADATA:
      '0x70d6b41479d4071a86750057e2d2778561a0c8769ef2f2b3fbe77bd4754bb76d',
    ISUI_PRINCIPAL_METADATA:
      '0x7f3f5ce6465d7cb045f39d57d19c5c5e129b671c4e53ed6aa3fef6f204502888',
    ISUI_YIELD_METADATA:
      '0x7a01be3320f9156193f1d0b16548cbe4a7ee070fb988945aa3296112de1806d4',
    POOL_STORAGE:
      '0xf7a1013f9c6f02961c0fdf2afc9d9e00b47fd9bb7724e205c9eb2697b130b87f',
    ISUI_STORAGE:
      '0x8138dd7cc9255e841edc29a1192a90c9508a2906c31887b03b9e76c1f63dd062',
    REVIEWS_STORAGE:
      '0xe0b975226e68b4c521cb25449012ee3528ced3405ceb869bcde46ea8ded8ab29',
    ISUI_PRINCIPAL_STORAGE:
      '0xd6204891193062f4cde5db36c35d8699cf7e51fae52c5fea9c56a3a7a7840033',
    ISUI_YIELD_STORAGE:
      '0x78fb9e69655ee4a0cde0238d9dd2f369e386ac6a73b495a6dd8bccc720dd7cf9',
    PACKAGE_ID:
      '0xa6b69fe707f40488503782036c4a73c7972eb32ace452c3b6367359483750d0f',
  },
  [Network.MAINNET]: {
    ISUI_METADATA:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_PRINCIPAL_METADATA:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_YIELD_METADATA:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    POOL_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    REVIEWS_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_PRINCIPAL_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ISUI_YIELD_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
};

export const ISUI_COIN_TYPE = `${
  LST_OBJECTS[Network.TESTNET].PACKAGE_ID
}::isui::ISUI`;

export const ISUI_YIELD_TYPE = `${
  LST_OBJECTS[Network.TESTNET]
}::sui_yield::SuiYield`;

export const DEFAULT_VALIDATOR = {
  [Network.DEVNET]:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  [Network.TESTNET]:
    '0xba4d20899c7fd438d50b2de2486d08e03f34beb78a679142629a6baacb88b013',
  [Network.MAINNET]:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
};

export const DEFAULT_LST_STORAGE: LstStorage = {
  totalPrincipal: ZERO_BIG_NUMBER,
  fee: { base: ZERO_BIG_NUMBER, jump: ZERO_BIG_NUMBER, kink: ZERO_BIG_NUMBER },
  lastEpoch: ZERO_BIG_NUMBER,
  validatorCount: 0,
  whiteListedValidators: [],
  pool: new Rebase(ZERO_BIG_NUMBER, ZERO_BIG_NUMBER),
  validatorTable: {
    size: ZERO_BIG_NUMBER,
    head: null,
    tail: null,
  },
};