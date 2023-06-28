import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useEffect, useState } from 'react';

import { RefBox } from '@/elements';
import { useNetwork, useProvider } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { noop } from '@/utils';

import WalletDropdown from './wallet-dropdown';
import WalletProfile from './wallet-profile';

const BOX_ID = 'wallet-connected-box-id-123';

const WalletConnected: FC = () => {
  const { network } = useNetwork();
  const { accounts } = useWalletKit();
  const { suiNSProvider } = useProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (accounts.length) {
      setLoading(true);
      const promises = accounts.map((walletAccount) =>
        suiNSProvider.getName(walletAccount.address)
      );

      Promise.all(promises)
        .then(async (names) => {
          setSuiNSRecord(
            names.reduce(
              (acc, name, index) =>
                name ? { ...acc, [accounts[index].address]: name } : acc,
              {} as Record<string, string>
            )
          );
        })
        .catch(noop)
        .finally(() => setLoading(false));
    }
  }, [network, accounts]);

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
      <WalletProfile setIsOpen={setIsOpen} suiNSRecord={suiNSRecord} />
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
