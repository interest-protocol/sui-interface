import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { TOAST_DURATION } from '@/constants';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  dashboard,
}) => {
  const { colors, radii } = useTheme() as Theme;

  if (dashboard)
    return (
      <Box display="flex" bg="background" height="100vh">
        <Sidebar />
        <Box as="main" flex="1">
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
      <Footer />
    </Box>
  );
};

export default Layout;
