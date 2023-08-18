import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, lightTheme, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';

import { LogoSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { useNetwork } from '@/hooks';

import { SidebarLogoProps } from './sidebar.types';

const SidebarLogo: FC<SidebarLogoProps> = ({ isCollapsed }) => {
  const { network } = useNetwork();

  return (
    <Link href={Routes[RoutesEnum.Home]}>
      <Motion
        mb="3.75rem"
        display="flex"
        overflow="hidden"
        textAlign="center"
        alignItems="center"
        position="relative"
        animation={isCollapsed ? '2.5rem' : 'auto'}
        transition={{
          duration: 0.5,
        }}
        variants={{
          collapsed: { width: '2.5rem ' },
          unCollapsed: { width: 'auto' },
        }}
      >
        <Box
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          minWidth="2.5rem"
          minHeight="2.5rem"
          alignItems="center"
          justifyContent="center"
          bg={lightTheme.colors.primary}
        >
          <LogoSVG
            height="1.5rem"
            fill="white"
            maxWidth="1.5rem"
            maxHeight="1.5rem"
            width="1.5rem"
          />
        </Box>
        <Box ml="0.75rem">
          <Typography
            variant="medium"
            width="max-content"
            fontWeight="500"
            color="onSurface"
          >
            Interest Protocol
          </Typography>
          {network === Network.TESTNET && (
            <Typography textAlign="left" color="primary" variant="extraSmall">
              Testnet
            </Typography>
          )}
        </Box>
      </Motion>
    </Link>
  );
};

export default SidebarLogo;
