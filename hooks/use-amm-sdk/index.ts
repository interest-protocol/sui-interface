import { Network } from '@interest-protocol/sui-amm-sdk';

import { devNetAmmSdk, mainNetAmmSdk, testNetAmmSdk } from '@/utils';

import { useNetwork } from '../use-network';

const SDK_RECORD = {
  [Network.DEVNET]: devNetAmmSdk,
  [Network.TESTNET]: testNetAmmSdk,
  [Network.MAINNET]: mainNetAmmSdk,
};

export const useAmmSdk = () => {
  const { network } = useNetwork();

  return SDK_RECORD[network] || mainNetAmmSdk;
};
