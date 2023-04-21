import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { TOAST_DURATION } from '@/constants';
import { IEmptyObj } from '@/interface';

import Footer from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren<IEmptyObj>> = ({ children }) => {
  const { colors, radii } = useTheme() as Theme;

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
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
