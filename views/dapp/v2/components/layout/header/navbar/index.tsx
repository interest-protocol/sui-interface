import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NavItem from './nav-item';
import { NavbarProps } from './navbar.types';

const Navbar: FC<NavbarProps> = ({ isMobile }) => (
  <Box
    as="nav"
    flexDirection={isMobile ? 'column' : 'row'}
    display={[
      isMobile ? 'flex' : 'none',
      isMobile ? 'flex' : 'none',
      isMobile ? 'flex' : 'none',
      'flex',
    ]}
  >
    <NavItem item="home" path="/dapp/v2" />
    <NavItem item="swap" path="/dapp/v2/swap" />
    <NavItem item="pool" path="/dapp/v2/pool" />
    <NavItem item="lend" path="/dapp/v2/lending" />
  </Box>
);

export default Navbar;
