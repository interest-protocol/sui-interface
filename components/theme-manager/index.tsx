import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProviderProps } from '@emotion/react/types/theming';
import {
  darkTheme,
  lightTheme,
  ThemeProvider as InterestThemeProvider,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { ModalProvider } from '@/context/modal';
import { DAppDarkTheme, DAppLightTheme } from '@/design-system/dapp-theme';
import {
  DappGlobalStyles,
  LandingGlobalStyles,
} from '@/design-system/global-styles';
import institutionalTheme from '@/design-system/insitutional-theme/dark';
import { useLocalStorage } from '@/hooks';

import NetworkProvider from '../network-provider';
import { ThemeProps } from './theme-manager.types';
import WalletSuiProvider from './wallet-sui-provider';

// TODO: REMOVE THESE CONSTANTS
const INSTITUTIONAL_PAGES = ['/', '/team', '/campaign/liquidity'];
const DAPP_OLD_DESIGN_PAGES = ['/dex', '/farms', '/liquidity'];

const Theme: FC<PropsWithChildren<ThemeProps>> = ({
  dark,
  setDark,
  children,
  isRedesign,
}) => {
  const { asPath } = useRouter();

  const isInstitutional = INSTITUTIONAL_PAGES.includes(asPath);

  if (isInstitutional)
    return (
      <InterestThemeProvider theme={{ setDark, ...institutionalTheme }}>
        <Global styles={LandingGlobalStyles} />
        {children}
      </InterestThemeProvider>
    );

  if (isRedesign)
    return (
      <NetworkProvider>
        <InterestThemeProvider
          theme={{ setDark, ...(dark ? darkTheme : lightTheme) }}
        >
          <Global styles={LandingGlobalStyles} />
          <WalletSuiProvider>
            <ModalProvider newDesign>{children}</ModalProvider>
          </WalletSuiProvider>
        </InterestThemeProvider>
      </NetworkProvider>
    );

  return (
    <NetworkProvider>
      <ThemeProvider
        theme={{ setDark, ...(dark ? DAppDarkTheme : DAppLightTheme) }}
      >
        <Global styles={DappGlobalStyles} />
        <WalletSuiProvider>{children}</WalletSuiProvider>
      </ThemeProvider>
    </NetworkProvider>
  );
};

const ThemeManager: FC<Omit<ThemeProviderProps, 'theme'>> = ({ children }) => {
  const { asPath } = useRouter();

  const isRedesign = !DAPP_OLD_DESIGN_PAGES.some((path) =>
    asPath.includes(path)
  );
  const [dark, setDark] = useLocalStorage('sui-interest-theme', false);

  return (
    <Theme dark={dark} setDark={setDark} isRedesign={isRedesign}>
      <SkeletonTheme
        baseColor={
          isRedesign
            ? '#99BBFF28'
            : (dark ? DAppDarkTheme : DAppLightTheme).colors.bottomBackground
        }
        highlightColor={
          isRedesign
            ? '#99BBFF14'
            : (dark ? DAppDarkTheme : DAppLightTheme).colors.background
        }
      >
        {children}
      </SkeletonTheme>
    </Theme>
  );
};

export default ThemeManager;
