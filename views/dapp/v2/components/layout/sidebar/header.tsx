import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, lightTheme, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { LogoSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { useNetwork } from '@/hooks';

import { SideBarHeaderProps } from './sidebar.types';

const SideBarHeader: FC<SideBarHeaderProps> = ({ isCollapsed }) => {
  const { network } = useNetwork();

  return (
    <Link href={Routes[RoutesEnum.Home]}>
      <Box
        borderRadius="m"
        textAlign="center"
        position="relative"
        alignItems="center"
        justifyContent="center"
        width={isCollapsed ? '2.5rem' : '100%'}
        display={isCollapsed ? 'flex' : 'block'}
        height={isCollapsed ? '2.5rem' : 'unset'}
        bg={isCollapsed ? lightTheme.colors.primary : 'unset'}
      >
        <LogoSVG
          height="100%"
          full={!isCollapsed}
          fill={isCollapsed ? 'white' : undefined}
          maxWidth={isCollapsed ? '1.5rem' : '100%'}
          maxHeight={isCollapsed ? '1.5rem' : '2.6rem'}
        />
        {network === Network.TESTNET && !isCollapsed && (
          <Typography
            bottom="0"
            left="4.5rem"
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

export default SideBarHeader;
