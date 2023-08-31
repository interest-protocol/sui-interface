import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoubleArrowSVG } from '@/components/svg/v2';

import { RightSidebarCloseButtonProps } from '../connect-wallet.types';

const RightSidebarCloseButton: FC<RightSidebarCloseButtonProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { colors } = useTheme() as Theme;

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      display="flex"
      width="2.5rem"
      height="2.5rem"
      borderRadius="m"
      cursor="pointer"
      color="onSurface"
      border="1px solid"
      alignItems="center"
      justifyContent="center"
      borderColor="outline.outlineVariant"
      onClick={handleClose}
      nHover={{
        transition: 'all 300ms ease-in-out',
        backgroundColor: `${colors.primary}14`,
      }}
    >
      <Motion
        display="flex"
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        transform={!isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
      >
        <DoubleArrowSVG
          width="100%"
          height="100%"
          maxWidth="0.625rem"
          maxHeight="0.625rem"
        />
      </Motion>
    </Box>
  );
};

export default RightSidebarCloseButton;
