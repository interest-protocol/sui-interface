import { useCallback, useEffect, useState } from 'react';

import { safeStringify } from '@/utils';

import { useIsMounted } from '../use-is-mounted';

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
  const isMounted = useIsMounted();
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        setStoredValue(JSON.parse(value));
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        setStoredValue(defaultValue);
      }
    } catch (err) {
      setStoredValue(defaultValue);
    }
  }, [keyName, isMounted]);

  const setValue = useCallback(
    (newValue: T) => {
      try {
        window.localStorage.setItem(keyName, safeStringify(newValue));
      } finally {
        setStoredValue(newValue);
      }
    },
    [storedValue, keyName, isMounted]
  );

  return [storedValue, setValue];
}
