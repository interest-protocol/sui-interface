import { Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { UserSVG } from '@/components/svg/v2';
import { RefBox } from '@/elements';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import WalletProfileDropdown from './wallet-profile-drodown';

const BOX_ID = 'wallet-box-id-123';

const WalletProfile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme() as Theme;

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  return (
    <RefBox
      id={BOX_ID}
      ml={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      display="flex"
      position="relative"
      ref={connectedBoxRef}
      flexDirection="column"
      justifyContent="center"
      borderRadius="100%"
      border="1px solid"
      transition="background-color .5s"
      bg={colors['primary']}
    >
      <Button
        variant="icon"
        color={colors['primary.onPrimary']}
        nHover={{ bg: 'transparent' }}
        onClick={() => setIsOpen(true)}
      >
        <UserSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />
      </Button>
      <WalletProfileDropdown isOpen={isOpen} />
    </RefBox>
  );
};

export default WalletProfile;
