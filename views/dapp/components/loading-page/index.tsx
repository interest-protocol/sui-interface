import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Box } from '@/elements';

import LoadingView from '../loading-view';

const LoadingPage: FC = () => {
  const { dark } = useTheme() as Theme;

  return (
    <Box width="100vw" height="100vh" bg={dark ? '#131316' : '#FBF8FD'}>
      <LoadingView />
    </Box>
  );
};
export default LoadingPage;
