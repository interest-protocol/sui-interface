import { FC } from 'react';

import { Box } from '@/elements';
import { LogoSVG } from '@/svg';
import Loading from '@/views/dapp/components/loading';

import { LoadingPageProps } from './loading-page.types';

const LoadingPage: FC<LoadingPageProps> = ({ customHeight, customWidth }) => (
  <Box
    width={customWidth || '100vw'}
    height={customHeight || '100vh'}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box mr="L" color="accent" width="7.5rem" height="7.5rem" cursor="pointer">
      <LogoSVG
        maxHeight="7.5rem"
        maxWidth="7.5rem"
        width="100%"
        aria-label="Logo"
        fill="currentColor"
      />
    </Box>
    <Loading />
  </Box>
);

export default LoadingPage;
