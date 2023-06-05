import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LogoSVG } from '@/svg';

import Menu from './menu';
import Navbar from './navbar';

const Header: FC = () => (
  <Box
    variant="container"
    pt={['s', 's', 's', '2.5rem']}
    pb={['s', 's', 's', 'xl']}
  >
    <Box
      width="100%"
      display="flex"
      gridColumn="1/-1"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Box color="primary" py="m" px="s">
          <LogoSVG
            width="100%"
            fill="currentColor"
            maxWidth="1.875rem"
            maxHeight="1.875rem"
          />
        </Box>
        <Navbar />
      </Box>
      <Menu />
    </Box>
  </Box>
);

export default Header;
