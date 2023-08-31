import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC, useCallback, useState } from 'react';

import { RightSidebarCloseButtonProps } from '@/components/web3-manager/connect-wallet/connect-wallet.types';
import RightSidebarFooter from '@/components/web3-manager/connect-wallet/footer';
import {
  RightMenuVariants,
  RightMenuVariantsMobile,
} from '@/components/web3-manager/connect-wallet/wallet/wallet-variants';
import useEventListener from '@/hooks/use-event-listener';

import { MenuSwitchAccountProps } from '../profile.types';
import UserInfo from './user-info';

const MenuProfile: FC<
  MenuSwitchAccountProps & RightSidebarCloseButtonProps
> = ({
  isOpen,
  loading,
  setIsOpen,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
  isSwitchAccountOpen,
  handleOpenSwitchAccount,
  handleCloseSwitchAccount,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const Variants = !isMobile ? RightMenuVariants : RightMenuVariantsMobile;
  return (
    <Motion
      top="0"
      right="0"
      zIndex="6"
      bg="surface"
      display="flex"
      height="100vh"
      overflow="hidden"
      initial="closed"
      variants={Variants}
      flexDirection="column"
      borderLeft="1px solid"
      textTransform="capitalize"
      justifyContent="space-between"
      animate={isOpen ? 'open' : 'closed'}
      pb={['7rem', '7rem', '7rem', 'unset']}
      borderLeftColor="outline.outlineVariant"
      position={['fixed', 'fixed', 'fixed', 'absolute']}
    >
      <Box
        display="flex"
        flexDirection="column"
        height={[
          'calc(100% + 3rem)',
          'calc(100% + 3rem)',
          'calc(100% - 1rem)',
          'calc(100% - 4rem)',
        ]}
        justifyContent="space-between"
      >
        <UserInfo
          isOpen={isOpen}
          loading={loading}
          suiNSRecord={suiNSRecord}
          avatarUrlRecord={avatarUrlRecord}
          handleCloseProfile={handleCloseProfile}
          isSwitchAccountOpen={isSwitchAccountOpen}
          handleOpenSwitchAccount={handleOpenSwitchAccount}
          handleCloseSwitchAccount={handleCloseSwitchAccount}
        />
      </Box>
      <RightSidebarFooter isOpen={isOpen} setIsOpen={setIsOpen} />
    </Motion>
  );
};

export default MenuProfile;
