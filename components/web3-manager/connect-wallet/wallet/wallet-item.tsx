import { Box, lightTheme, Typography } from '@interest-protocol/ui-kit';
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

  const handleConnect = () => {
    if (installLink) return window.open(installLink, '_blank');

    connect(name);
    openWalletModal(name);
  };

  return (
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
      onClick={handleConnect}
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
