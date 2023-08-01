import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { LogoSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { useNetwork } from '@/hooks';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import NetworkSwitch from '../network-switch';
import { SIDEBAR_ITEMS } from './sidebar.data';

const Sidebar: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { asPath, push } = useRouter();

  return (
    <Box
      pb="0"
      p="2xl"
      width="100%"
      display="flex"
      overflowY="auto"
      maxWidth="20rem"
      maxHeight="100vh"
      flexDirection="column"
      bg="surface.container"
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
    >
      <Box>
        <Link href={Routes[RoutesEnum.Home]}>
          <Box textAlign="center" position="relative">
            <LogoSVG full maxWidth="100%" maxHeight="2.6rem" height="100%" />
            {network === Network.TESTNET && (
              <Typography
                left="4.5rem"
                bottom="0"
                color="primary"
                variant="extraSmall"
                position="absolute"
              >
                Testnet
              </Typography>
            )}
          </Box>
        </Link>
        <Typography m="xl" variant="small" color="onSurfaceVariant">
          Menu
        </Typography>
        <Box display="flex" flexDirection="column" gap="s">
          {SIDEBAR_ITEMS.filter(({ networks }) =>
            networks.includes(network)
          ).map(({ Icon, name, path, disabled }) => (
            <Box
              p="l"
              key={v4()}
              display="flex"
              borderRadius="m"
              color="onSurface"
              opacity={disabled ? 0.7 : 1}
              transition="all 350ms ease-in-out"
              cursor={disabled ? 'not-allowed' : 'pointer'}
              bg={asPath === path ? '#99BBFF14' : undefined}
              onClick={disabled ? undefined : () => push(path)}
              nHover={{
                bg: !disabled && '#99BBFF28',
              }}
            >
              <Icon maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
              <Typography variant="small" ml="l">
                {capitalize(
                  t(`common.v2.navbar.${name}` as TTranslatedMessage)
                )}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box my="m" display="flex" flexDirection="column" alignItems="center">
        <NetworkSwitch />
      </Box>
    </Box>
  );
};

export default Sidebar;
