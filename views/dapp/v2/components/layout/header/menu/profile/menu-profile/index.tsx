import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { EXPLORER_URL, wrapperVariants } from '@/constants';
import { useNetwork, useWeb3 } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';

import MenuButton from '../../menu-button';
import { MenuProfileProps } from '../profile.types';
import { MENU_PROFILE_DATA } from './menu.data';
import MenuProfileItem from './profile-item';
import UserInfo from './user-info';

const MenuProfile: FC<MenuProfileProps> = ({
  isOpen,
  loading,
  handleOpenSwitch,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
}) => {
  const { account } = useWeb3();
  const { network } = useNetwork();
  const { disconnect } = useWalletKit();

  const handleAction: Record<string, () => void | Promise<void>> = {
    disconnect: () => {
      handleCloseProfile();
      disconnect();
    },
    switchAccounts: handleOpenSwitch,
    viewInExplorer: () => {
      window.open(`${EXPLORER_URL[network]}/account/${account}`, '_blank');
    },
  };

  const [isDesktop, setIsDesktop] = useState(false);
  const { breakpoints } = useTheme() as Theme;
  const handleSetDesktopView = () =>
    setIsDesktop(window.matchMedia(`(min-width: ${breakpoints[2]})`).matches);

  useEventListener('resize', handleSetDesktopView, true);

  return (
    <Motion
      right="0"
      top={['0', '0', '0', '3rem']}
      overflow="auto"
      zIndex={1}
      initial="closed"
      borderRadius="unset"
      position={['fixed', 'fixed', 'fixed', 'absolute']}
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      textTransform="capitalize"
      width={['100vw', '100vw', '100vw', '14.5rem']}
      height={['100vh', '100vh', '100vh', 'unset']}
      p={['xl', 'xl', 'xl', 'unset']}
      pb={['7rem', '7rem', '7rem', 'unset']}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box
          display={['flex', 'flex', 'flex', 'none']}
          flexDirection="row-reverse"
          py="l"
        >
          <MenuButton isOpen={true} handleClose={handleCloseProfile} />
        </Box>
        <UserInfo
          loading={loading}
          suiNSRecord={suiNSRecord}
          avatarUrlRecord={avatarUrlRecord}
        />
        {MENU_PROFILE_DATA.slice(0, !isDesktop ? -1 : undefined).map(
          (profileItem) => (
            <MenuProfileItem
              {...profileItem}
              handleAction={handleAction}
              key={v4()}
            />
          )
        )}
      </Box>
      {!isDesktop &&
        MENU_PROFILE_DATA.slice(-1).map((profileItem) => (
          <MenuProfileItem
            {...profileItem}
            handleAction={handleAction}
            key={v4()}
          />
        ))}
    </Motion>
  );
};

export default MenuProfile;
