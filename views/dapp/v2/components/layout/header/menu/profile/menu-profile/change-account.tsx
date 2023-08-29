import { FC } from 'react';

import { DotsSVG } from '@/components/svg';
import RefBox from '@/elements/ref-box';

import MenuSwitchAccount from '../menu-switch-account';
import { MenuSwitchAccountProps } from '../profile.types';

const BOX_ID = 'wallet-accounts';

const ChangeAccount: FC<MenuSwitchAccountProps> = ({
  isOpen,
  avatarUrlRecord,
  handleCloseProfile,
  loading,
  onBack,
  setIsOpen,
  suiNSRecord,
}) => {
  return (
    <>
      <RefBox
        id={BOX_ID}
        marginLeft="6rem"
        onClick={() => (setIsOpen ? setIsOpen(isOpen) : undefined)}
      >
        <DotsSVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
      </RefBox>
      {isOpen && (
        <MenuSwitchAccount
          loading={loading}
          isOpen={isOpen}
          suiNSRecord={suiNSRecord}
          onBack={onBack}
          avatarUrlRecord={avatarUrlRecord}
          handleCloseProfile={handleCloseProfile}
        />
      )}
    </>
  );
};

export default ChangeAccount;
