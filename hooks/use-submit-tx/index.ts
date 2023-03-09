import { incrementTX } from '@/api/analytics';

import { useWeb3 } from '../use-web3/index';

export const useSubmitTX = (
  callback: () => Promise<void>
): (() => Promise<void>) => {
  const { account } = useWeb3();

  return async () => {
    await callback();
    incrementTX(account ?? '');
  };
};
