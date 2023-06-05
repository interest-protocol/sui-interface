import styled from '@emotion/styled';
import { Box } from '@interest-protocol/ui-kit';
import { ConnectButton } from '@mysten/wallet-kit';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ConnectWalletProps } from '@/components/layout/header/header.types';
import { UserSVG } from '@/components/svg/v2';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { noop } from '@/utils';

const StyledConnectButton = styled(ConnectButton)`
  width: 100%;
  white-space: nowrap !important;
  color: #fff !important;
  padding-left: 0.7rem !important;
  padding-right: 0.7rem !important;
  background: #4282a8 !important;
  transition: background-color 1s;
  border-radius: 2.5rem !important;
  &:hover {
    background: #6fbcf0 !important;
  }
`;

export const ConnectWallet: FC<ConnectWalletProps> = (props) => (
  <StyledConnectButton {...props} />
);

const Wallet: FC = () => {
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
        color="textAccent"
        borderRadius="100%"
      >
        <UserSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
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
