import { useTheme } from '@emotion/react';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { Theme } from '@/design-system';
import { Box } from '@/elements';
import ErrorBoundary from '@/views/dapp/components/error-boundary';

import { SEO } from '..';
import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<LayoutProps> = ({ pageTitle = '', children }) => {
  const { colors, radii } = useTheme() as Theme;
  return (
    <ErrorBoundary>
      <Box color="text" height="100vh" display="flex" flexDirection="column">
        <SEO pageTitle={pageTitle} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              color: colors.text,
              borderRadius: radii.M,
              background: colors.foreground,
            },
          }}
        />
        <Header />
        <Box
          flex="1"
          as="main"
          display="flex"
          position="relative"
          flexDirection="column"
          pb="calc(env(safe-area-inset-bottom))"
          justifyContent="stretch"
          bg="textSoft"
        >
          {children}
        </Box>
        <Footer />
        <Tooltip />
      </Box>
    </ErrorBoundary>
  );
};

export default Layout;
