import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC } from 'react';

import { WalletItemProps } from '../connect-wallet.types';
import WalletItemButtons from './wallet-item-buttons';

const WalletItem: FC<WalletItemProps> = ({
  icon,
  name,
  displayName,
  installLink,
  openWalletModal,
}) => {
  const { connect } = useWalletKit();
  const { colors } = useTheme() as Theme;

  const handleConnect = () => {
    if (installLink) return window.open(installLink, '_blank');

    connect(name);
    openWalletModal(name);
  };

  return (
    <Box
      p="xs"
      display="flex"
      borderRadius="m"
      cursor="pointer"
      alignItems="center"
      onClick={handleConnect}
      bg="surface.containerLow"
      justifyContent="space-between"
      transition="background 250ms ease-in-out"
      nHover={{
        backgroundColor: colors['surface.containerHigh'],
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
        <Box
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage={`url(${icon})`}
        />
        <Typography variant="medium" fontWeight="400">
          {displayName}
        </Typography>
      </Box>
      <WalletItemButtons
        installLink={installLink}
        handleConnect={handleConnect}
      />
    </Box>
  );
};

export default WalletItem;
