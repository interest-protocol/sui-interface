import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork } from '@/hooks';

import SideBarMenuListItem from './menu-list-item';
import { SIDEBAR_ITEMS } from './sidebar.data';
import { MenuListProps } from './sidebar.types';

const SidebarMenuList: FC<MenuListProps> = ({
  setIsCollapsed,
  isCollapsed,
}) => {
  const { network } = useNetwork();

  return (
    <Box display="flex" flexDirection="column" gap="s">
      {SIDEBAR_ITEMS.filter(({ networks }) => networks.includes(network)).map(
        (item, index) => (
          <SideBarMenuListItem
            key={v4()}
            index={index}
            {...item}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        )
      )}
    </Box>
  );
};

export default SidebarMenuList;
