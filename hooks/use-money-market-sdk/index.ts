import { Network } from '@interest-protocol/sui-amm-sdk';

import {
  devNetMoneyMarketSdk,
  mainNetMoneyMarketSdk,
  testNetMoneyMarketSdk,
} from '@/utils';

import { useNetwork } from '../use-network';

const SDK_RECORD = {
  [Network.DEVNET]: devNetMoneyMarketSdk,
  [Network.TESTNET]: testNetMoneyMarketSdk,
  [Network.MAINNET]: mainNetMoneyMarketSdk,
};

export const useMoneyMarketSdk = () => {
  const { network } = useNetwork();

  return SDK_RECORD[network] || testNetMoneyMarketSdk;
};
