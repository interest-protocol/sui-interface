import { Box } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import Settings from '../../../settings';
import { MenuSwitchAccountProps } from '../../profile.types';
import DisconnectWallet from '../disconnect';
import WalletTabsContent from '../wallet-tabs/wallet-tabs-content';
import UserInfoHeader from './user-info-header';

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
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Box height="calc(100% - 3.5rem)" display="flex" flexDirection="column">
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
        toggleTab={toggle}
        setToggleTab={setToggle}
        suiNSRecord={suiNSRecord}
        avatarUrlRecord={avatarUrlRecord}
        handleCloseProfile={handleCloseProfile}
        isSwitchAccountOpen={isSwitchAccountOpen}
        handleOpenSwitchAccount={handleOpenSwitchAccount}
        handleCloseSwitchAccount={handleCloseSwitchAccount}
      />
      <WalletTabsContent toggleTab={toggle} />
    </Box>
  );
};

export default UserInfo;
