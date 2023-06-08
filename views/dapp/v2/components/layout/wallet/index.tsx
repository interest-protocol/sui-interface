import styled from '@emotion/styled';
import { Box } from '@interest-protocol/ui-kit';
import { ConnectButton } from '@mysten/wallet-kit';
import { not } from 'ramda';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ConnectWalletProps } from '@/components/layout/header/header.types';
import { UserSVG } from '@/components/svg/v2';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { noop } from '@/utils';

import WalletDropdown from './wallet-dropdown';

const StyledConnectButton = styled(ConnectButton)`
  width: 100%;
  color: #002266 !important;
  font-weight: 400 !important;
  white-space: nowrap !important;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  background: #99bbff !important;
  border-radius: 0.25rem !important;
  transition: all 0.2s ease-in-out !important;
  font-family: 'Roboto Mono', 'Share Tech Mono', monospace !important;
  &:hover {
    transform: scale(1.05) translateZ(0px) !important;
  }
`;

export const ConnectWallet: FC<ConnectWalletProps> = (props) => (
  <StyledConnectButton {...props} />
);

const Wallet: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { network } = useNetwork();
  const { suiNSProvider } = useProvider();
  const { connected, account } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [suiNs, setSuiNS] = useState<string | undefined>(undefined);

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

  if (connected)
    return (
      <Box
        bg="primary"
        width="2.5rem"
        height="2.5rem"
        color="surface"
        position="relative"
        borderRadius="100%"
      >
        <UserSVG
          width="100%"
          maxWidth="2.5rem"
          maxHeight="2.5rem"
          onClick={() => setIsOpen(not)}
        />
        {isOpen && <WalletDropdown isOpen={isOpen} />}
      </Box>
    );

  return (
    <Box
      bg="textSoft"
      display="flex"
      alignItems="center"
      borderRadius="2.5rem"
      justifyContent="space-between"
    >
      <Box
        fontSize="M"
        width="auto"
        border="none"
        display="inline-flex"
        bg="bottomBackground"
        borderRadius="2.5rem"
      >
        <ConnectWallet
          connectedText={!loading ? suiNs : <Skeleton width="6rem" />}
        />
      </Box>
    </Box>
  );
};

export default Wallet;
