import { Box } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { capitalize } from '@/utils';

import NavItemText from './nav-item-text';
import { NAVBAR_ICONS } from './navbar.data';
import { NavItemProps } from './navbar.types';

const NavItem: FC<NavItemProps> = ({ path, item }) => {
  const { asPath } = useRouter();
  const notDesktop = item === 'home';
  const isSelected = asPath === path;
  const Icon = NAVBAR_ICONS[item];

  return (
    <Box display={['block', 'block', notDesktop ? 'none' : 'block']}>
      <Link href={path}>
        <Box
          display="flex"
          alignItems="center"
          color={[
            isSelected ? 'primary' : 'textSoft',
            isSelected ? 'primary' : 'textSoft',
            isSelected ? 'primary' : 'text',
          ]}
        >
          <Box height="1rem" display={['block', 'block', 'none']}>
            <Icon maxWidth="1rem" maxHeight="1rem" height="100%" />
          </Box>
          <NavItemText isSelected={isSelected}>{capitalize(item)}</NavItemText>
        </Box>
      </Link>
    </Box>
  );
};

export default NavItem;
