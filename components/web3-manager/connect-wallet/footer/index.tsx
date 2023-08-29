import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { RightSidebarCloseButtonProps } from '../connect-wallet.types';
import RightSidebarCloseButton from './right-sidebar-close-button';

const RightSidebarFooter: FC<RightSidebarCloseButtonProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Box
      left="0"
      zIndex="6"
      bottom="0"
      bg="surface"
      width="100%"
      px="1.25rem"
      py=".875rem"
      display="flex"
      alignItems="center"
      position="absolute"
    >
      <RightSidebarCloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default RightSidebarFooter;
