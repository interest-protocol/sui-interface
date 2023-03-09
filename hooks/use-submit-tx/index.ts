import { incrementTX } from '@/api/analytics';

import { useWeb3 } from '../use-web3/index';

export const useSubmitTX = (
  callback: () => Promise<void>,
  onErrorCallback: undefined | ((error: unknown) => void | Promise<void>),
  onFinallyCallback: undefined | (() => void | Promise<void>)
): (() => Promise<void>) => {
  const { account } = useWeb3();

  return async () => {
    try {
      await callback();
      incrementTX(account ?? '');
    } catch (error) {
      await onErrorCallback?.(error);
    } finally {
      await onFinallyCallback?.();
    }
  };
};
