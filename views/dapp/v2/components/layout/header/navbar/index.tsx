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
    <NavItem item="home" path="/dapp/" />
    <NavItem item="swap" path="/dapp/alpha/swap" />
    <NavItem item="pool" path="/dapp/alpha/pool" />
    <NavItem item="lend" path="/dapp/alpha/lending" />
  </Box>
);

export default Navbar;
