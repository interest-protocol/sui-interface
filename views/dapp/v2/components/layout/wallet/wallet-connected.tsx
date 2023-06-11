import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { FC, useEffect, useState } from 'react';

import { UserSVG } from '@/components/svg/v2';
import { RefBox } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { noop } from '@/utils';

import WalletDropdown from './wallet-dropdown';

const BOX_ID = 'wallet-connected-box-id-123';

const WalletConnected: FC = () => {
  const {
    colors: { surface },
  } = useTheme() as Theme;

  const [isOpen, setIsOpen] = useState(false);
  const { network } = useNetwork();
  const { suiNSProvider } = useProvider();
  const { account } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [suiNs, setSuiNS] = useState<string | undefined>(undefined);

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

  useEffect(() => {
    if (account) {
      setLoading(true);
      suiNSProvider
        .getName(account)
        .then(setSuiNS)
        .catch(noop)
        .finally(() => setLoading(false));
    }
  }, [network, account]);

  return (
    <RefBox
      id={BOX_ID}
      height="3rem"
      color={surface}
      position="relative"
      ref={connectedBoxRef}
    >
      <Box display="flex" gap="m" alignItems="center">
        {account && (
          <Typography variant="medium" color="onSurface">
            {formatAddress(account)}
          </Typography>
        )}
        <Box
          bg="primary"
          width="2.5rem"
          height="2.5rem"
          cursor="pointer"
          borderRadius="50%"
          onClick={() => setIsOpen(true)}
          transition="transform 300ms ease-in-out"
          nHover={{
            transform: 'scale(1.1)',
          }}
        >
          <UserSVG width="100%" maxWidth="2.5rem" maxHeight="2.5rem" />
        </Box>
      </Box>
      <WalletDropdown
        isOpen={isOpen}
        loading={loading}
        addressName={suiNs}
        handleDisconnect={() => {
          setIsOpen(false);
        }}
      />
    </RefBox>
  );
};

export default WalletConnected;
