import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoubleArrowSVG } from '@/components/svg/v2';

import SelectWallet from './select-wallet';
import { UserSidebarPropsProps } from './select-wallet/user-sidebar.types';

const itemVariants = {
  open: {
    x: '0rem',
  },
  closed: {
    x: '19.75rem',
  },
};

const UserSidebar: FC<UserSidebarPropsProps> = ({
  openConnectWallet,
  setOpenConnectWallet,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <Motion
      p="xl"
      top="0"
      right="0"
      zIndex="5"
      height="100vh"
      display="grid"
      width="19.75rem"
      position="fixed"
      color="onSurface"
      background="surface"
      variants={itemVariants}
      boxShadow="0 0 10rem #6663"
      gridTemplateRows="4rem 1fr 4rem"
      animate={openConnectWallet ? 'open' : 'closed'}
    >
      <SelectWallet
        openConnectWallet={openConnectWallet}
        setOpenConnectWallet={setOpenConnectWallet}
      />
      <Box display="flex" alignItems="center">
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
          borderColor="outline.outlineVariant"
          onClick={() => setOpenConnectWallet(false)}
          nHover={{
            transition: 'all 300ms ease-in-out',
            backgroundColor: `${colors.primary}14`,
          }}
        >
          <DoubleArrowSVG
            width="100%"
            height="100%"
            maxWidth="0.625rem"
            maxHeight="0.625rem"
          />
        </Box>
      </Box>
    </Motion>
  );
};

export default UserSidebar;
