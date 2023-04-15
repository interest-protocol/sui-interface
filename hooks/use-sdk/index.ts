import { Network } from '@/constants';
import { devNetIPXSdk, testNetIPXSdk } from '@/utils';

import { useNetwork } from '../use-network';

const SDK_RECORD = {
  [Network.DEVNET]: devNetIPXSdk,
  [Network.TESTNET]: testNetIPXSdk,
};

export const useSDK = () => {
  const { network } = useNetwork();

  return SDK_RECORD[network] || testNetIPXSdk;
};
