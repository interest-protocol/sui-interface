import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { TOAST_DURATION } from '@/constants';
import useEventListener from '@/hooks/use-event-listener';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';
import Wallet from './wallet';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  dashboard,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { dark, colors, radii, breakpoints } = useTheme() as Theme;

  const handleSetDesktopView = () =>
    setIsDesktop(window.matchMedia(`(min-width: ${breakpoints[2]})`).matches);

  useEventListener('resize', handleSetDesktopView, true);

  if (dashboard && isDesktop)
    return (
      <Box
        display="flex"
        height="100vh"
        overflow="hidden"
        bg={dark ? 'background' : '#FBF8FD'}
      >
        <Sidebar />
        <Box as="main" flex="1" minHeight="100vh" overflow="auto">
          <Box
            as="header"
            display="flex"
            variant="container"
            justifyContent="flex-end"
          >
            <Wallet />
          </Box>
          {children}
        </Box>
      </Box>
    );

  return (
    <Box
      display="flex"
      bg="background"
      minHeight="100vh"
      flexDirection="column"
    >
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            color: colors.text,
            border: '1px solid',
            borderRadius: radii.m,
            background: colors.background,
            borderColor: colors.textAccent,
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
