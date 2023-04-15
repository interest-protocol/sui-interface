import styled from '@emotion/styled';
import { ConnectButton } from '@mysten/wallet-kit';
import { FixedPointMath } from 'lib';
import { pathOr } from 'ramda';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { COIN_TYPE, Network } from '@/constants';
import { Box, Typography } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { LoadingSVG, SuiSVG } from '@/svg';
import { ZERO_BIG_NUMBER } from '@/utils';

import { ConnectWalletProps } from './header.types';

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
  const { coinsMap, connected, isFetchingCoinBalances, account } = useWeb3();
  const { network } = useNetwork();
  const { suiNSProvider } = useProvider();
  const [loading, setLoading] = useState(false);
  const [suiNs, setSuiNS] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (network === Network.DEVNET && account && suiNSProvider) {
      setLoading(true);
      suiNSProvider
        .getName(account)
        .then(setSuiNS)
        .finally(() => setLoading(false));
    }
  }, [network, suiNSProvider, account]);

  return (
    <Box
      bg="textSoft"
      display="flex"
      alignItems="center"
      borderRadius="2.5rem"
      justifyContent="space-between"
    >
      {connected && (
        <Typography
          pl="L"
          pr="M"
          as="span"
          variant="normal"
          whiteSpace="nowrap"
          display={['none', 'flex']}
        >
          {isFetchingCoinBalances ? (
            <Box as="span" display="inline-block">
              <LoadingSVG
                width="100%"
                height="100%"
                maxWidth="1rem"
                maxHeight="1rem"
              />
            </Box>
          ) : (
            FixedPointMath.toNumber(
              pathOr(
                ZERO_BIG_NUMBER,
                [COIN_TYPE[Network.DEVNET].SUI, 'totalBalance'],
                coinsMap
              )
            )
          )}
          <Box
            ml="S"
            as="span"
            color="text"
            width="1.2rem"
            height="1.2rem"
            overflow="hidden"
            borderRadius="50%"
            display="inline-block"
          >
            <SuiSVG
              height="100%"
              width="100%"
              maxHeight="1.2rem"
              maxWidth="1.2rem"
              fill="currentColor"
            />
          </Box>
        </Typography>
      )}
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
