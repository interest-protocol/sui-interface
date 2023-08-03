import { Box, Button, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoubleArrowSVG } from '@/components/svg/v2';
import { useLocalStorage } from '@/hooks';

import { SideBarFooterProps } from './sidebar.types';

const SidebarFooter: FC<SideBarFooterProps> = ({ isCollapsed }) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useLocalStorage(
    'sui-interest-menu-collapse',
    true
  );

  return (
    <Box my="m" display="flex" flexDirection="column">
      <Button
        variant="icon"
        width="2.5rem"
        height="2.5rem"
        onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid !important"
        borderColor="surface.container"
        p="0 !important"
        mx={isCollapsed ? 'auto' : 'unset'}
      >
        <Motion
          transform={isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'}
          transition={{ duration: 0.5 }}
          display="flex"
        >
          <DoubleArrowSVG
            maxHeight="0.625rem"
            maxWidth="0.625rem"
            height="100%"
            width="100%"
          />
        </Motion>
      </Button>
    </Box>
  );
};

export default SidebarFooter;
