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
      py="1rem"
      mt="auto"
      bg="surface"
      width="100%"
      px="1.25rem"
      display="flex"
      height="3.5rem"
      alignItems="center"
    >
      <RightSidebarCloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default RightSidebarFooter;
