import { Network } from '@interest-protocol/sui-amm-sdk';
import { Rebase } from '@interest-protocol/sui-money-market-sdk';

import { ZERO_BIG_NUMBER } from '@/utils';
import { LstStorage } from '@/views/dapp/v2/lst/lst.types';

export const LST_OBJECTS = {
  [Network.DEVNET]: {
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
    SBT_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    REWARDS_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ACTIONS_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  [Network.TESTNET]: {
    ISUI_METADATA:
      '0x8a5f00fb85f07151e43c39af0b12f9f3c664a6488972408a2d5ea39e4c2b3e06',
    ISUI_PRINCIPAL_METADATA:
      '0x1968972b022477c911d905eb708482a7b2f61183bdd5e94a352312c634b604ec',
    ISUI_YIELD_METADATA:
      '0xcf6366e39c923658c8a6702f79db5896900e9008db82daa42fdfc5b5d256395b',
    POOL_STORAGE:
      '0x937d63b96e7a9d874494135c9242e22b47223d45f6dca4dfe2244b70f9dfcc0b',
    ISUI_STORAGE:
      '0x3ef0373746344af3daf56dc58b4b302fd5e42da296a2157e838b55edad3c1c0d',
    REVIEWS_STORAGE:
      '0x9a18303397cadc6dcef36b9301e2c151c4c0ba7c55817623aaebd779c7e73ed5',
    ISUI_PRINCIPAL_STORAGE:
      '0xf98699df7e6575a5acb5ba9b3bb7a06b68863a994e062a6fcfc037e6b3518e31',
    ISUI_YIELD_STORAGE:
      '0x6d144a5391b9f0bd1b321d05b4438dbca24940d85c498c902622d8103be98c42',
    SBT_STORAGE:
      '0x97b30ee162f018c9a9480128a95afa79f6f93373a0f190f28baa14cf11467e36',
    REWARDS_STORAGE:
      '0x025c21076ed4a8337bb842bd75dd8d76753edacfe176af82f31c155bd3bbecf1',
    ACTIONS_STORAGE:
      '0xffc4b45655b31b0c00774d18bfdec4cddcaaf5ff48a3451fec9d0891b5782e13',
    PACKAGE_ID:
      '0x0d6bb0d552b866ed8d24e6b036f8094c669df0720f2d37e7a60c8d3107af369a',
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
    SBT_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    REWARDS_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ACTIONS_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
};

export const ISUI_COIN_TYPE = `${
  LST_OBJECTS[Network.TESTNET].PACKAGE_ID
}::isui::ISUI`;

export const getISuiPrincipalType = (network: Network) =>
  `${LST_OBJECTS[network].PACKAGE_ID}::semi_fungible_token::SemiFungibleToken<${LST_OBJECTS[network].PACKAGE_ID}::sui_principal::SUI_PRINCIPAL>`;

export const getISuiYieldType = (network: Network) =>
  `${LST_OBJECTS[network].PACKAGE_ID}::sui_yield::SuiYield`;

export const DEFAULT_VALIDATOR = {
  [Network.DEVNET]: '',
  [Network.TESTNET]:
    '0xba4d20899c7fd438d50b2de2486d08e03f34beb78a679142629a6baacb88b013',
  [Network.MAINNET]: '',
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
  averageAPY: ZERO_BIG_NUMBER,
  totalActivateStakedSui: ZERO_BIG_NUMBER,
};
