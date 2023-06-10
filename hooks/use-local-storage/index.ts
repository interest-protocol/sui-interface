import { useLocalStorage as useLocalStorageHook } from 'usehooks-ts';

import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';

type LocalStorageKeys = `sui-interest-${
  | 'theme'
  | 'network'
  | 'version'
  | 'farm-account'
  | 'swap-settings'
  | 'tokens-metadata'
  | 'favorite-tokens'}`;

export function useLocalStorage<T>(
  keyName: LocalStorageKeys,
  defaultValue: T
): [T, (value: T) => void] {
  return useLocalStorageHook<T>(
    `${LOCAL_STORAGE_VERSION}-${keyName}`,
    defaultValue
  );
}
