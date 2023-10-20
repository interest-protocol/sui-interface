import {
  Box,
  Motion,
  Theme,
  TooltipWrapper,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoubleArrowSVG } from '@/components/svg/v2';
import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';

import Checkpoint from '../network-switch/checkpoint';
import CheckpointNumber from '../network-switch/checkpoint-number';
import { SidebarCollapseButtonProps } from './menu-sidebar.types';

const MenuSidebarCollapseButton: FC<SidebarCollapseButtonProps> = ({
  isOpen,
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
      pb="s"
      pt="m"
      gap="m"
      display="flex"
      overflow="hidden"
      transition={{ duration: 0.5 }}
      animation={isCollapsed ? '2.5rem' : 'auto'}
      variants={{
        collapsed: { width: '2.5rem ' },
        unCollapsed: { width: 'auto' },
      }}
    >
      <Box
        display="flex"
        width="2.5rem"
        height="2.5rem"
        minWidth="2.5rem"
        borderRadius="m"
        cursor="pointer"
        color="onSurface"
        minHeight="2.5rem"
        border="1px solid"
        position="relative"
        alignItems="center"
        justifyContent="center"
        onClick={handleCollapse}
        borderColor="outline.outlineVariant"
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
        {isCollapsed && !isOpen && (
          <Box
            position="absolute"
            mt="-0.5rem"
            bottom="-0.3rem"
            right="-0.3rem"
          >
            <TooltipWrapper
              bg="inverseSurface"
              width="max-content"
              tooltipPosition="top"
              tooltipContent={
                <Typography
                  variant="extraSmall"
                  color="inverseOnSurface"
                  textTransform="capitalize"
                >
                  <CheckpointNumber />
                </Typography>
              }
            >
              <Checkpoint withoutInfo />
            </TooltipWrapper>
          </Box>
        )}
      </Box>
      {(!isCollapsed || isOpen) && (
        <Box mx="auto">
          <Checkpoint />
        </Box>
      )}
    </Motion>
  );
};

export default MenuSidebarCollapseButton;
