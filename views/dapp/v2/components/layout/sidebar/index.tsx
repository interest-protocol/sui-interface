import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';

import { useLocalStorage } from '@/hooks';

import SidebarFooter from './footer';
import SidebarHeader from './header';
import SidebarMenuList from './menu-list';

const itemVariants = {
  open: {
    width: ['5.5rem', '20rem'],
    transition: { duration: 0.5, delayChildren: 10.3, staggerChildren: 0.1 },
  },
  closed: {
    width: ['20rem', '5.5rem'],
    transition: { duration: 0.5, delayChildren: 10.3, staggerChildren: 0.1 },
  },
};

const Sidebar: FC = () => {
  const [isMenuCollapse] = useLocalStorage('sui-interest-menu-collapse', true);
  const [isCollapsed, setIsCollapsed] = useState(isMenuCollapse);

  useEffect(() => {
    setIsCollapsed(isMenuCollapse);
  }, [isMenuCollapse]);

  return (
    <Motion
      pb="0"
      p="2xl"
      display="flex"
      minWidth="5.5rem"
      maxHeight="100vh"
      flexDirection="column"
      bg="surface.container"
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
      variants={itemVariants}
      animate={isCollapsed ? itemVariants.closed : itemVariants.open}
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
