import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Routes, RoutesEnum, TOAST_DURATION } from '@/constants';
import useEventListener from '@/hooks/use-event-listener';

import Footer from './footer';
import Header from './header';
import LangSwitch from './lang-switch';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';
import Wallet from './wallet';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  dashboard,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { colors, radii, breakpoints } = useTheme() as Theme;
  const { pathname } = useRouter();
  const IS_LEND_PAGE = pathname == Routes[RoutesEnum.Lend];
  const handleSetDesktopView = () =>
    setIsDesktop(window.matchMedia(`(min-width: ${breakpoints[2]})`).matches);

  useEventListener('resize', handleSetDesktopView, true);

  if (dashboard && isDesktop)
    return (
      <>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              border: '1px solid',
              borderRadius: radii.m,
              color: colors.onSurface,
              background: colors.surface,
              borderColor: colors['primary.onPrimaryContainer'],
            },
            duration: TOAST_DURATION,
          }}
        />
        <Box bg="surface" display="flex" height="100vh" overflow="hidden">
          <Sidebar />
          <Box as="main" flex="1" minHeight="100vh" overflow="auto" px="1.5rem">
            <Box
              as="header"
              display="flex"
              variant="container"
              justifyContent={IS_LEND_PAGE ? 'space-between' : 'flex-end'}
              pr={['unset', 'unset', 'unset', 'xl']}
            >
              {IS_LEND_PAGE && (
                <Typography
                  variant="displayLarge"
                  color="onSurface"
                  textTransform="capitalize"
                >
                  Lend
                </Typography>
              )}
              <Box display="flex" justifyContent="space-between">
                <Wallet />
                <LangSwitch />
              </Box>
            </Box>
            {children}
          </Box>
        </Box>
      </>
    );

  return (
    <Box bg="surface" display="flex" minHeight="100vh" flexDirection="column">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: '1px solid',
            borderRadius: radii.m,
            color: colors.onSurface,
            background: colors.surface,
            borderColor: colors['primary.onPrimaryContainer'],
          },
          duration: TOAST_DURATION,
        }}
      />
      <Header />
      <Box as="main" flex="1">
        {children}
      </Box>
      {!dashboard && <Footer />}
    </Box>
  );
};

export default Layout;
