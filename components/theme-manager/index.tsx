import { ThemeProvider } from '@emotion/react';
import { ThemeProviderProps } from '@emotion/react/types/theming';
import { FC } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { DAppDarkTheme, DAppLightTheme } from '@/design-system/dapp-theme';
import { useLocalStorage } from '@/hooks';

const ThemeManager: FC<Omit<ThemeProviderProps, 'theme'>> = ({ children }) => {
  const [dark, setDark] = useLocalStorage('sui-interest-theme', false);

  return (
    <ThemeProvider
      theme={{ setDark, ...(dark ? DAppDarkTheme : DAppLightTheme) }}
    >
      <SkeletonTheme
        baseColor={
          (dark ? DAppDarkTheme : DAppLightTheme).colors.bottomBackground
        }
        highlightColor={
          (dark ? DAppDarkTheme : DAppLightTheme).colors.background
        }
      >
        {children}
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default ThemeManager;
