import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { LogoSVG } from '@/svg';

import { LayoutProps } from '../layout.types';
import SwitchLangButton from './switch-lang-button';

const Header: FC<LayoutProps> = ({ noContent }) => {
  const { colors } = useTheme() as Theme;

  return (
    <Box bg="background">
      <Box variant="container" alignItems="center" justifyItems="unset">
        <Link href="/">
          <LogoSVG
            width="100%"
            height="100%"
            maxWidth="2.125rem"
            maxHeight="1.75rem"
            fill={colors.primary}
          />
        </Link>
        {!noContent && (
          <Box
            color="text"
            display="flex"
            position="relative"
            alignItems="flex-end"
            flexDirection="column"
            gridColumn={['2/5', '2/9', '2/13']}
          >
            <SwitchLangButton />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
