import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork } from '@/hooks';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import NetworkSwitch from '../../../network-switch';
import { SIDEBAR_ITEMS } from '../../../sidebar/sidebar.data';

const MainMenu: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { asPath, push } = useRouter();

  return (
    <Box
      variant="container"
      justifyItems="unset"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      m="0 1.25rem"
      pt="2.875rem"
    >
      <Box zIndex="2" gridColumn="1/-1">
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
      <Box display="flex" justifyContent="center" gap="l" mb="4.188rem">
        <NetworkSwitch />
      </Box>
    </Box>
  );
};

export default MainMenu;
