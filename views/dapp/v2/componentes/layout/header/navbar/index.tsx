import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

const NavItem: FC<{ path: string; name: string }> = ({ path, name }) => (
  <Link href={path}>
    <Typography variant="small" px="2.75rem" color="text">
      {name}
    </Typography>
  </Link>
);

const Navbar: FC = () => (
  <Box as="nav" display={['none', 'none', 'flex']}>
    <NavItem name="Swap" path="/dapp/v2/dex" />
    <NavItem name="Pool" path="/dapp/v2/pool" />
    <NavItem name="Lend" path="/dapp/v2/lending" />
  </Box>
);

export default Navbar;
