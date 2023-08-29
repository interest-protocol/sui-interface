import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Settings from '../../settings';
import { MenuSwitchAccountProps } from '../profile.types';
import DisconnectWallet from './disconnect';
import UserInfoHeader from './user-info-header';
import WalletTabs from './wallet-tabs';

const UserInfo: FC<MenuSwitchAccountProps> = ({
  loading,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
  isOpen,
  onBack,
  setIsOpen,
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
        avatarUrlRecord={avatarUrlRecord}
        loading={loading}
        suiNSRecord={suiNSRecord}
        handleCloseProfile={handleCloseProfile}
        isOpen={isOpen}
        onBack={onBack}
        setIsOpen={setIsOpen}
      />
      <Box p="xl" overflow="auto">
        <WalletTabs />
      </Box>
    </>
  );
};

export default UserInfo;
