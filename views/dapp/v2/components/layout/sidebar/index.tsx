import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { useIsMounted, useReadLocalStorage } from 'usehooks-ts';

import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';

import SidebarMenuList from './menu-list';
import SidebarCollapseButton from './sidebar-collapse-button';
import SidebarHeader from './sidebar-logo';

const itemVariants = {
  open: {
    width: '20rem',
  },
  closed: {
    width: '6rem',
  },
};

const Sidebar: FC = () => {
  const isMounted = useIsMounted();
  const isLocalCollapsed = useReadLocalStorage<boolean>(
    `${LOCAL_STORAGE_VERSION}-sui-interest-menu-collapse`
  );

  const [isOpen, setTemporarilyOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isLocalCollapsed ?? false);

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
      position="relative"
      initial={
        itemVariants[
          isOpen || !isCollapsed
            ? isMounted()
              ? 'closed'
              : 'open'
            : isMounted()
            ? 'open'
            : 'closed'
        ]
      }
    >
      <Box>
        <SidebarHeader isCollapsed={!isOpen && isCollapsed} />
        <SidebarMenuList
          setIsCollapsed={setIsCollapsed}
          isCollapsed={!isOpen && isCollapsed}
          setTemporarilyOpen={setTemporarilyOpen}
        />
      </Box>
      <Box position="absolute" bottom="0" width="100%">
        <SidebarCollapseButton
          isOpen={isOpen}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </Box>
    </Motion>
  );
};

export default Sidebar;
