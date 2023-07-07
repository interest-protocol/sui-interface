import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Chip } from '@/components';
import { useNetwork } from '@/hooks';

import Checkpoint from './checkpoint';

const NetworkSwitch: FC = () => {
  const { asPath } = useRouter();
  const { network, setNetwork } = useNetwork();

  const handleChangeNetwork = (selectedNetwork: Network) => () => {
    setNetwork(selectedNetwork);
  };

  return (
    <Box my="s">
      <Box display="flex" p="l" pb="s" gap="m" justifyContent="center">
        {!asPath.includes('dapp/alpha') && (
          <Chip
            noCheckmark
            text="Mainnet"
            isActive={network === Network.MAINNET}
            onClick={handleChangeNetwork(Network.MAINNET)}
          />
        )}
        {(asPath.includes('dapp/alpha') ||
          process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') && (
          <Chip
            noCheckmark
            text="Testnet"
            isActive={network === Network.TESTNET}
            onClick={handleChangeNetwork(Network.TESTNET)}
          />
        )}
      </Box>
      <Checkpoint />
    </Box>
  );
};

export default NetworkSwitch;
