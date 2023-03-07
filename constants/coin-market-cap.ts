import { COIN_TYPE } from './coins';
import { Network } from './network';

export const COIN_MARKET_CAP_ID_RECORD = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]: 1839,
    [COIN_TYPE[Network.DEVNET].ETH]: 1027,
    [COIN_TYPE[Network.DEVNET].BTC]: 1,
    [COIN_TYPE[Network.DEVNET].USDT]: 825,
    [COIN_TYPE[Network.DEVNET].USDC]: 3408,
    [COIN_TYPE[Network.DEVNET].DAI]: 4943,
    [COIN_TYPE[Network.DEVNET].SUI]: -1,
    [COIN_TYPE[Network.DEVNET].IPX]: -1,
  },
};
