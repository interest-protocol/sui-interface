import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useLocalStorage } from '@/hooks';

import SidebarFooter from './footer';
import SidebarHeader from './header';
import SidebarMenuList from './menu-list';

const Sidebar: FC = () => {
  const [isCollapsed] = useLocalStorage('sui-interest-menu-collapse', true);

  return (
    <Box
      pb="0"
      p="2xl"
      display="flex"
      width={isCollapsed ? '5.5rem' : '20rem'}
      maxWidth={isCollapsed ? '5.5rem' : '20rem'}
      maxHeight="100vh"
      flexDirection="column"
      bg="surface.container"
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
    >
      <Box>
        <SidebarHeader />
        <SidebarMenuList />
      </Box>
      <SidebarFooter />
    </Box>
  );
};

export default Sidebar;
