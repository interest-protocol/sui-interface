import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

import { TOAST_DURATION } from '@/constants';
import { Box } from '@/elements';
import ErrorBoundary from '@/views/dapp/components/error-boundary';

import { SEO } from '..';
import Footer from './footer';
//import Header from './header';
import HeaderV2 from './header-v2';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  pageTitle = '',
  children,
}) => {
  const { colors, radii } = useTheme() as Theme;

  return (
    <ErrorBoundary>
      <Box height="100vh" display="flex" flexDirection="column">
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
            duration: TOAST_DURATION,
          }}
        />
        <HeaderV2 />
        <Box
          flex="1"
          as="main"
          bg="textSoft"
          display="flex"
          pb={['XXXL', 'L']}
          position="relative"
          flexDirection="column"
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
