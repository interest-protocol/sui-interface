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
        mb="3.75rem"
        display="flex"
        overflow="hidden"
        textAlign="center"
        alignItems="center"
        position="relative"
        width={isCollapsed ? '2.5rem' : 'auto'}
      >
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          borderRadius="m"
          width="2.5rem"
          height="2.5rem"
          minWidth="2.5rem"
          minHeight="2.5rem"
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
      </Box>
    </Link>
  );
};

export default SideBarHeader;
