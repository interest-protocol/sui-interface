import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, lightTheme, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { LogoSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { useLocalStorage, useNetwork } from '@/hooks';

const SidebarHeader: FC = () => {
  const { network } = useNetwork();
  const [isCollapsed] = useLocalStorage('sui-interest-menu-collapse', true);

  return (
    <Link href={Routes[RoutesEnum.Home]}>
      <Box
        textAlign="center"
        position="relative"
        width={isCollapsed ? '2.5rem' : '100%'}
        height={isCollapsed ? '2.5rem' : 'unset'}
        bg={isCollapsed ? lightTheme.colors.primary : 'unset'}
        display={isCollapsed ? 'flex' : 'block'}
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
      >
        <LogoSVG
          full={!isCollapsed}
          maxWidth={isCollapsed ? '1.5rem' : '100%'}
          maxHeight={isCollapsed ? '1.5rem' : '2.6rem'}
          height="100%"
          fill={isCollapsed ? 'white' : undefined}
        />
        {network === Network.TESTNET && !isCollapsed && (
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
  );
};

export default SidebarHeader;
