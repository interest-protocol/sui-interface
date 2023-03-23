import { useLocalStorage as useLocalStorageHook } from 'usehooks-ts';

type LocalStorageKeys = `sui-interest-${
  | 'tokens'
  | 'farm-account'
  | 'theme'
  | 'swap-settings'
  | 'tokens'}`;

export function useLocalStorage<T>(
  keyName: LocalStorageKeys,
  defaultValue: T
): [T, (value: T) => void] {
  return useLocalStorageHook<T>(keyName, defaultValue);
}
