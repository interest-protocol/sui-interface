import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork } from '@/hooks';

import SideBarMenuItem from './menu-item';
import { SIDEBAR_ITEMS } from './sidebar.data';
import { MenuListProps } from './sidebar.types';

const SidebarMenuList: FC<MenuListProps> = ({
  isCollapsed,
  setIsCollapsed,
  setTemporarilyOpen,
}) => {
  const { network } = useNetwork();

  return (
    <Box display="flex" flexDirection="column" gap="s">
      {SIDEBAR_ITEMS.filter(({ networks }) => networks.includes(network)).map(
        (item) => (
          <SideBarMenuItem
            {...item}
            key={v4()}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            setTemporarilyOpen={setTemporarilyOpen}
          />
        )
      )}
    </Box>
  );
};

export default SidebarMenuList;
