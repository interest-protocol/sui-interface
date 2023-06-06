import { useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { TOAST_DURATION } from '@/constants';
import institutionalTheme from '@/design-system/insitutional-theme/dark';
import Box from '@/elements/box';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  noContent,
}) => {
  const { colors, radii } = useTheme() as typeof institutionalTheme;

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
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
      <Header noContent={noContent} />
      {children}
      {!noContent && <Footer />}
    </Box>
  );
};

export default Layout;
