import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { useLocalStorage } from '@/hooks';

import SidebarFooter from './footer';
import SidebarHeader from './header';
import SidebarMenuList from './menu-list';

const Sidebar: FC = () => {
  const [isMenuCollapse] = useLocalStorage('sui-interest-menu-collapse', true);
  const [isCollapsed, setIsCollapsed] = useState(isMenuCollapse);
  return (
    <Motion
      pb="0"
      p="2xl"
      display="flex"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      animate={{ width: isCollapsed ? '5.5rem' : '20rem' }}
      maxHeight="100vh"
      flexDirection="column"
      bg="surface.container"
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
    >
      <Box>
        <SidebarHeader isCollapsed={isCollapsed} />
        <SidebarMenuList
          setIsCollapsed={setIsCollapsed}
          isCollapsed={isCollapsed}
        />
      </Box>
      <SidebarFooter isCollapsed={isCollapsed} />
    </Motion>
  );
};

export default Sidebar;
