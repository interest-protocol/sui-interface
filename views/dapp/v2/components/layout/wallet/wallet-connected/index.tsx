import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { RefBox } from '@/elements';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import WalletDropdown from './wallet-dropdown';
import WalletProfile from './wallet-profile';

const BOX_ID = 'wallet-connected-box-id-123';

const WalletConnected: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suiNSRecord, setSuiNSRecord] = useState<Record<string, string>>({});
  const {
    colors: { surface },
  } = useTheme() as Theme;

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

  const handleClose = () => setIsOpen(false);

  return (
    <RefBox
      id={BOX_ID}
      height="3rem"
      color={surface}
      position="relative"
      ref={connectedBoxRef}
    >
      <WalletProfile
        setIsOpen={setIsOpen}
        setLoading={setLoading}
        suiNSRecord={suiNSRecord}
        setSuiNSRecord={setSuiNSRecord}
      />
      <WalletDropdown
        isOpen={isOpen}
        loading={loading}
        suiNSRecord={suiNSRecord}
        handleClose={handleClose}
      />
    </RefBox>
  );
};

export default WalletConnected;
