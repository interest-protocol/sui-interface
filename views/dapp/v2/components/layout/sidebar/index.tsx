import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { useLocalStorage } from '@/hooks';

import SidebarFooter from './footer';
import SidebarHeader from './header';
import SidebarMenuList from './menu-list';

const itemVariants = {
  open: {
    width: '20rem',
  },
  closed: {
    width: '5.5rem',
  },
};

const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useLocalStorage(
    'sui-interest-menu-collapse',
    true
  );

  const [isOpen, setTemporarilyOpen] = useState(false);

  return (
    <Motion
      pb="0"
      p="2xl"
      display="flex"
      maxHeight="100vh"
      flexDirection="column"
      bg="surface.container"
      variants={itemVariants}
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
      transition={{ duration: 0.5 }}
      animate={isOpen || !isCollapsed ? 'open' : 'closed'}
      initial={itemVariants[isOpen || !isCollapsed ? 'closed' : 'open']}
    >
      <Box>
        <SidebarHeader isCollapsed={!isOpen && isCollapsed} />
        <SidebarMenuList
          setIsCollapsed={setIsCollapsed}
          isCollapsed={!isOpen && isCollapsed}
          setTemporarilyOpen={setTemporarilyOpen}
        />
      </Box>
      <SidebarFooter isCollapsed={isCollapsed} />
    </Motion>
  );
};

export default Sidebar;
