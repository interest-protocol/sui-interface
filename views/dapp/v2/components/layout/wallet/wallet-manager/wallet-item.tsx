import { Box, Typography } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC } from 'react';

import { WalletItemProps } from './wallet-manager.types';

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
      p="m"
      display="flex"
      cursor="pointer"
      alignItems="center"
      borderRadius="0.5rem"
      bg="surface.containerLow"
      onClick={handleConnect}
      transition="background 250ms ease-in-out"
      nHover={{
        backgroundColor: 'surface.containerLow',
        '& .showButton': {
          display: 'flex',
        },
      }}
    >
      <Box display="flex" alignItems="center" gap={['m', 'm', 'm', 'xl']}>
        <Box
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage={`url("${icon}")`}
        />
        <Typography variant="medium" fontWeight="400">
          {displayName}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletItem;
