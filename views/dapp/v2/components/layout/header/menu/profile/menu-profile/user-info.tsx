import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Settings from '../../settings';
import { MenuSwitchAccountProps } from '../profile.types';
import DisconnectWallet from './disconnect';
import UserInfoHeader from './user-info-header';
import WalletTabs from './wallet-tabs';

const UserInfo: FC<MenuSwitchAccountProps> = ({
  isOpen,
  loading,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
  isSwitchAccountOpen,
  handleOpenSwitchAccount,
  handleCloseSwitchAccount,
}) => {
  return (
    <>
      <Box
        p="xl"
        gap="s"
        display="flex"
        color="onSurface"
        justifyContent="flex-end"
      >
        <Settings />
        <DisconnectWallet />
      </Box>
      <UserInfoHeader
        isOpen={isOpen}
        loading={loading}
        suiNSRecord={suiNSRecord}
        avatarUrlRecord={avatarUrlRecord}
        handleCloseProfile={handleCloseProfile}
        isSwitchAccountOpen={isSwitchAccountOpen}
        handleOpenSwitchAccount={handleOpenSwitchAccount}
        handleCloseSwitchAccount={handleCloseSwitchAccount}
      />
      <Box p="xl" overflow="auto">
        <WalletTabs />
      </Box>
    </>
  );
};

export default UserInfo;
