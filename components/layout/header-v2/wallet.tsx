import { Button } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { ConnectButton } from '@mysten/wallet-kit';
import { FixedPointMath } from 'lib';
import { pathOr } from 'ramda';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { COIN_TYPE, Network } from '@/constants';
import { Box } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { LoadingSVG, LogoSVG, SuiSVG } from '@/svg';
import { ZERO_BIG_NUMBER } from '@/utils';

const Wallet: FC = () => {
  const { coinsMap, connected, isFetchingCoinBalances, account } = useWeb3();
  const { network } = useNetwork();
  const { suiNSProvider } = useProvider();
  const [loading, setLoading] = useState(false);
  const [suiNs, setSuiNS] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (account) {
      setLoading(true);
      suiNSProvider
        .getName(account)
        .then(setSuiNS)
        .finally(() => setLoading(false));
    }
  }, [network, account]);

  return (
    <Box
      bg="textSoft"
      display="flex"
      alignItems="center"
      borderRadius="4px"
      justifyContent="space-between"
      height="100%"
    >
      {connected && (
        <Button
          variant="outline"
          fontWeight="400"
          height="100%"
          py="unset !important"
        >
          <Box
            as="span"
            color="text"
            width="1.2rem"
            height="1.2rem"
            overflow="hidden"
            borderRadius="50%"
            display="inline-block"
          >
            <LogoSVG
              height="100%"
              width="100%"
              maxHeight="1.2rem"
              maxWidth="1.2rem"
              fill="currentColor"
            />
          </Box>
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
        </Button>
      )}
      <Box
        width="auto"
        border="none"
        display={[
          connected ? 'none' : 'inline-flex',
          connected ? 'none' : 'inline-flex',
          connected ? 'none' : 'inline-flex',
          'inline-flex',
        ]}
        bg="bottomBackground"
        borderRadius="2.5rem"
        height="100%"
      >
        <ConnectButton
          connectText={
            !loading ? (
              <Button
                variant="filled"
                fontWeight="400"
                height="100%"
                py="unset !important"
              >
                Connect Wallet
              </Button>
            ) : (
              <Skeleton width="6rem" />
            )
          }
          connectedText={
            !loading ? (
              <Button
                variant="outline"
                fontWeight="400"
                height="100%"
                py="unset !important"
                ml="0.3rem"
              >
                <Box
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
                    hasBackground
                  />
                </Box>
                {formatAddress(account || '')}
              </Button>
            ) : (
              <Skeleton width="6rem" />
            )
          }
          style={{ padding: '0', background: 'transparent' }}
        />
      </Box>
    </Box>
  );
};

export default Wallet;
