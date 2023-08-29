import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { RightSidebarCloseButtonProps } from '@/components/web3-manager/connect-wallet/connect-wallet.types';
import RightSidebarFooter from '@/components/web3-manager/connect-wallet/footer';
import { RightMenuVariants } from '@/components/web3-manager/connect-wallet/wallet/wallet-variants';

import { MenuSwitchAccountProps } from '../profile.types';
import UserInfo from './user-info';

const MenuProfile: FC<
  MenuSwitchAccountProps & RightSidebarCloseButtonProps
> = ({
  avatarUrlRecord,
  handleCloseProfile,
  isOpen,
  loading,
  onBack,
  setIsOpen,
  suiNSRecord,
}) => {
  return (
    <Motion
      top="0"
      right="0"
      zIndex="6"
      bg="surface"
      display="flex"
      height="100vh"
      initial="closed"
      overflow="hidden"
      flexDirection="column"
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
          handleCloseProfile={handleCloseProfile}
          isOpen={isOpen}
          onBack={onBack}
          setIsOpen={setIsOpen}
          suiNSRecord={suiNSRecord}
          avatarUrlRecord={avatarUrlRecord}
        />
      </Box>
      <RightSidebarFooter isOpen={isOpen} setIsOpen={setIsOpen} />
    </Motion>
  );
};

export default MenuProfile;
