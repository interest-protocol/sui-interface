import { Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DotsSVG } from '@/components/svg';
import RefBox from '@/elements/ref-box';

import MenuSwitchAccount from '../menu-switch-account';
import { MenuSwitchAccountProps } from '../profile.types';

const BOX_ID = 'wallet-accounts';

const ChangeAccount: FC<MenuSwitchAccountProps> = ({
  isOpen,
  loading,
  suiNSRecord,
  avatarUrlRecord,
  handleCloseProfile,
  isSwitchAccountOpen,
  handleOpenSwitchAccount,
  handleCloseSwitchAccount,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <>
      <RefBox
        id={BOX_ID}
        display="flex"
        cursor="pointer"
        borderRadius="100%"
        position="relative"
        flexDirection="column"
        justifyContent="center"
        transition="background-color .5s"
        nHover={{ bg: colors['outline.outlineVariant'] }}
      >
        <Button
          variant="icon"
          border="1px solid"
          borderRadius="full"
          nHover={{ bg: 'transparent' }}
          onClick={handleOpenSwitchAccount}
          borderColor="outline.outlineVariant"
        >
          <DotsSVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
        </Button>
      </RefBox>
      {isSwitchAccountOpen && (
        <MenuSwitchAccount
          isOpen={isOpen}
          loading={loading}
          suiNSRecord={suiNSRecord}
          avatarUrlRecord={avatarUrlRecord}
          handleCloseProfile={handleCloseProfile}
          isSwitchAccountOpen={isSwitchAccountOpen}
          handleOpenSwitchAccount={handleOpenSwitchAccount}
          handleCloseSwitchAccount={handleCloseSwitchAccount}
        />
      )}
    </>
  );
};

export default ChangeAccount;
