import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { RightSidebarCloseButtonProps } from '@/components/web3-manager/connect-wallet/connect-wallet.types';
import RightSidebarFooter from '@/components/web3-manager/connect-wallet/footer';
import { RightMenuVariants } from '@/components/web3-manager/connect-wallet/wallet/wallet-variants';

import { MenuProfileProps } from '../profile.types';
import UserInfo from './user-info';

const MenuProfile: FC<MenuProfileProps & RightSidebarCloseButtonProps> = ({
  loading,
  suiNSRecord,
  avatarUrlRecord,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Motion
      top="0"
      right="0"
      zIndex="6"
      display="flex"
      height="100vh"
      overflow="auto"
      initial="closed"
      flexDirection="column"
      bg="surface.container"
      textTransform="capitalize"
      variants={RightMenuVariants}
      justifyContent="space-between"
      p={['xl', 'xl', 'xl', 'unset']}
      animate={isOpen ? 'open' : 'closed'}
      pb={['7rem', '7rem', '7rem', 'unset']}
      width={['100vw', '100vw', '100vw', '22rem']}
      position={['fixed', 'fixed', 'fixed', 'absolute']}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <UserInfo
          loading={loading}
          suiNSRecord={suiNSRecord}
          avatarUrlRecord={avatarUrlRecord}
        />
      </Box>
      <RightSidebarFooter isOpen={isOpen} setIsOpen={setIsOpen} />
    </Motion>
  );
};

export default MenuProfile;
