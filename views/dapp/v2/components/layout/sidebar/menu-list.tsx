import { Box, Typography } from '@interest-protocol/ui-kit';
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
    <>
      {!isCollapsed && (
        <Typography m="xl" variant="small" color="onSurfaceVariant">
          Menu
        </Typography>
      )}
      <Box
        display="flex"
        flexDirection="column"
        gap={isCollapsed ? 's' : 's'}
        mt={isCollapsed ? '3.75rem' : 'unset'}
      >
        {SIDEBAR_ITEMS.filter(({ networks }) => networks.includes(network)).map(
          (item) => (
            <SideBarMenuListItem
              key={v4()}
              {...item}
              setIsCollapsed={setIsCollapsed}
              isCollapsed={isCollapsed}
            />
          )
        )}
      </Box>
    </>
  );
};

export default SidebarMenuList;
