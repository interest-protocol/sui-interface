import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Chip } from '@/components';
import { useNetwork, useWeb3 } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';

const NetworkSwitch: FC = () => {
  const t = useTranslations();
  const { asPath } = useRouter();
  const { checkpoint } = useWeb3();
  const { network, setNetwork } = useNetwork();
  const [isOnline, setIsOnline] = useState(false);

  const handleChangeNetwork = (selectedNetwork: Network) => () => {
    setNetwork(selectedNetwork);
  };

  useEventListener('offline', () => setIsOnline(false), true);
  useEventListener('online', () => setIsOnline(true), true);

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
      <Typography
        mt="s"
        gap="s"
        display="flex"
        variant="small"
        color="onSurface"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          as="span"
          width="0.8rem"
          height="0.8rem"
          borderRadius="full"
          display="inline-block"
          bg={isOnline ? '#65A30D' : '#B91C1C'}
        />
        {checkpoint || t('common.notFound')}
      </Typography>
    </Box>
  );
};

export default NetworkSwitch;
