import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { TOAST_DURATION } from '@/constants';
import useEventListener from '@/hooks/use-event-listener';

import Footer from './footer';
import Header from './header';
import Settings from './header/menu/settings';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';
import Wallet from './wallet';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  dashboard,
  titlePage,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { colors, radii, breakpoints } = useTheme() as Theme;
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
              pr={['unset', 'unset', 'unset', 'xl']}
              justifyContent={titlePage ? 'space-between' : 'flex-end'}
            >
              {titlePage && (
                <Typography
                  color="onSurface"
                  variant="displayLarge"
                  textTransform="capitalize"
                >
                  {titlePage}
                </Typography>
              )}
              <Box
                gap="xs"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Wallet />
                <Settings />
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
