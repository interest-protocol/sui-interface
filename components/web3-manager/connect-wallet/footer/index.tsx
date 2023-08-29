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
      zIndex="6"
      width="100%"
      left="1.25rem"
      bottom=".875rem"
      position="absolute"
    >
      <RightSidebarCloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default RightSidebarFooter;
