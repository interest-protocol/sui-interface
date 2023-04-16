import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LogoSVG } from '@/svg';

import MotionExample from './motion-example';

const Header: FC = () => {
  const { colors } = useTheme() as Theme;

  return (
    <Box bg="background">
      <Box variant="container" alignItems="center" justifyItems="unset">
        <Box>
          <LogoSVG
            width="100%"
            height="100%"
            maxWidth="2.125rem"
            maxHeight="1.75rem"
            fill={colors.primary}
          />
        </Box>
        <Box
          color="text"
          display="flex"
          position="relative"
          alignItems="flex-end"
          flexDirection="column"
          gridColumn={['2/5', '2/9', '2/13']}
        >
          <MotionExample />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
