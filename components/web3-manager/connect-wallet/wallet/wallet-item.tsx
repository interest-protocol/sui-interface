import { Box, lightTheme, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SuiSVG } from '@/svg';

import { WalletItemProps } from '../connect-wallet.types';
import WalletItemButtons from './wallet-item-buttons';

const WalletItem: FC<WalletItemProps> = ({
  icon,
  name,
  hasInstalled,
  openWalletModal,
}) => (
  <Box
    p="xl"
    display="flex"
    cursor="pointer"
    alignItems="center"
    borderRadius="0.5rem"
    justifyContent="space-between"
    transition="background 250ms ease-in-out"
    nHover={{
      backgroundColor: lightTheme.colors['surface.containerLowest'],
      '& .showButton': {
        display: 'flex',
      },
    }}
  >
    <Box
      py="2xs"
      display="flex"
      alignItems="center"
      gap={['m', 'm', 'm', 'xl']}
    >
      {icon ? (
        <Box
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage={`url(${icon})`}
        />
      ) : (
        <Box
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#6FBCF0"
          color="white"
        >
          <SuiSVG
            filled
            maxWidth="1.5rem"
            maxHeight="1.5rem"
            width="100%"
            height="100%"
          />
        </Box>
      )}
      <Typography variant="medium" fontWeight="400">
        {name}
      </Typography>
    </Box>
    <WalletItemButtons
      openWalletModal={openWalletModal}
      name={name}
      hasInstalled={hasInstalled}
    />
  </Box>
);

export default WalletItem;
