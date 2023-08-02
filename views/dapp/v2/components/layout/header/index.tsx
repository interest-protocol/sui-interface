import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useNetwork } from '@/hooks';
import { LogoSVG } from '@/svg';

import Menu from './menu';

const Header: FC = () => {
  const { network } = useNetwork();

  return (
    <Box
      variant="container"
      pt={['s', 's', 's', '2.5rem']}
      pb={['s', 's', 's', 'xl']}
    >
      <Box
        width="100%"
        display="flex"
        gridColumn="1/-1"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Box color="primary" py="m" px="s" position="relative">
            <LogoSVG
              width="100%"
              fill="currentColor"
              maxWidth="1.875rem"
              maxHeight="1.875rem"
            />
            {network === Network.TESTNET && (
              <Typography
                left="1.8rem"
                bottom="0.5rem"
                color="primary"
                variant="extraSmall"
                position="absolute"
              >
                Testnet
              </Typography>
            )}
          </Box>
        </Box>
        <Menu />
      </Box>
    </Box>
  );
};

export default Header;
