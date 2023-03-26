import { useLocalStorage as useLocalStorageHook } from 'usehooks-ts';

type LocalStorageKeys = `sui-interest-${
  | 'farm-account'
  | 'theme'
  | 'swap-settings'
  | 'tokens-metadata'
  | 'favorite-tokens'}`;

export function useLocalStorage<T>(
  keyName: LocalStorageKeys,
  defaultValue: T
): [T, (value: T) => void] {
  return useLocalStorageHook<T>(keyName, defaultValue);
}
