import { Network } from '@interest-protocol/sui-sdk';

import { devNetIPXSdk, mainNetIPXSdk, testNetIPXSdk } from '@/utils';

import { useNetwork } from '../use-network';

const SDK_RECORD = {
  [Network.DEVNET]: devNetIPXSdk,
  [Network.TESTNET]: testNetIPXSdk,
  [Network.MAINNET]: mainNetIPXSdk,
};

export const useSDK = () => {
  const { network } = useNetwork();

  return SDK_RECORD[network] || mainNetIPXSdk;
};
