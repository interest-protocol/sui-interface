import styled from '@emotion/styled';
import { ConnectButton } from '@mysten/wallet-kit';
import { always, pathOr } from 'ramda';
import { FC } from 'react';

import { COIN_TYPE, Network } from '@/constants';
import { Box, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG, SuiSVG } from '@/svg';
import { ZERO_BIG_NUMBER } from '@/utils';

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

export const ConnectWallet: FC = always(<StyledConnectButton />);

const Wallet: FC = () => {
  const { coinsMap, connected, isFetchingCoinBalances } = useWeb3();

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
        <ConnectWallet />
      </Box>
    </Box>
  );
};

export default Wallet;
