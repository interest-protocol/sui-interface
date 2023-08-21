import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoubleArrowSVG } from '@/components/svg/v2';
import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';

import NetworkSwitch from '../network-switch';
import { SidebarCollapseButtonProps } from './sidebar.types';

const SidebarCollapseButton: FC<SidebarCollapseButtonProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const { colors } = useTheme() as Theme;

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);

    window.localStorage.setItem(
      `${LOCAL_STORAGE_VERSION}-sui-interest-menu-collapse`,
      String(!isCollapsed)
    );
  };

  return (
    <Motion
      my="m"
      display="flex"
      overflow="hidden"
      position="relative"
      animation={isCollapsed ? '2.5rem' : 'auto'}
      transition={{
        duration: 0.5,
      }}
      variants={{
        collapsed: { width: '2.5rem ' },
        unCollapsed: { width: 'auto' },
      }}
      gap="0.75rem"
    >
      <Box
        display="flex"
        width="2.5rem"
        height="2.5rem"
        minWidth="2.5rem"
        minHeight="2.5rem"
        borderRadius="m"
        cursor="pointer"
        color="onSurface"
        border="1px solid"
        alignItems="center"
        justifyContent="center"
        borderColor="outline.outlineVariant"
        onClick={handleCollapse}
        nHover={{
          transition: 'all 300ms ease-in-out',
          backgroundColor: `${colors.primary}14`,
        }}
      >
        <Motion
          display="flex"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          transform={!isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'}
        >
          <DoubleArrowSVG
            width="100%"
            height="100%"
            maxWidth="0.625rem"
            maxHeight="0.625rem"
          />
        </Motion>
      </Box>
      <Box mx="auto">
        <NetworkSwitch />
      </Box>
    </Motion>
  );
};

export default SidebarCollapseButton;
