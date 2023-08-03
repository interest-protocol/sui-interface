import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useLocalStorage, useNetwork } from '@/hooks';

import SidebarMenuListItem from './menu-list-item';
import { SIDEBAR_ITEMS } from './sidebar.data';

const SidebarMenuList: FC = () => {
  const { network } = useNetwork();
  const [isCollapsed] = useLocalStorage('sui-interest-menu-collapse', true);

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
            <SidebarMenuListItem key={v4()} {...item} />
          )
        )}
      </Box>
    </>
  );
};

export default SidebarMenuList;
