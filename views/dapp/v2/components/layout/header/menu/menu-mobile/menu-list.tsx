import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork } from '@/hooks';

import { SIDEBAR_ITEMS } from '../../../sidebar/sidebar.data';
import SideBarMenuListItem from './menu-list-item';

const MobileMenuList: FC = () => {
  const { network } = useNetwork();

  return (
    <Box display="flex" flexDirection="column" gap="s">
      {SIDEBAR_ITEMS.filter(({ networks }) => networks.includes(network)).map(
        (item, index) => (
          <SideBarMenuListItem key={v4()} index={index} {...item} />
        )
      )}
    </Box>
  );
};

export default MobileMenuList;
