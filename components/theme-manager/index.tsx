import { ThemeProvider } from '@emotion/react';
import { ThemeProviderProps } from '@emotion/react/types/theming';
import {
  darkTheme,
  lightTheme,
  ThemeProvider as InterestThemeProvider,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { DAppDarkTheme, DAppLightTheme } from '@/design-system/dapp-theme';
import { useLocalStorage } from '@/hooks';

interface ThemeProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const Theme: FC<PropsWithChildren<ThemeProps>> = ({
  children,
  setDark,
  dark,
}) => {
  const { asPath } = useRouter();

  const isHome = asPath === '/';

  if (isHome)
    return (
      <InterestThemeProvider
        theme={{ setDark, ...(dark ? darkTheme : lightTheme) }}
      >
        {children}
      </InterestThemeProvider>
    );

  return (
    <ThemeProvider
      theme={{ setDark, ...(dark ? DAppDarkTheme : DAppLightTheme) }}
    >
      {children}
    </ThemeProvider>
  );
};

const ThemeManager: FC<Omit<ThemeProviderProps, 'theme'>> = ({ children }) => {
  const [dark, setDark] = useLocalStorage('sui-interest-theme', false);

  return (
    <Theme dark={dark} setDark={setDark}>
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
    </Theme>
  );
};

export default ThemeManager;
