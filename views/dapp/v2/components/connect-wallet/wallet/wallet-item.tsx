import { Box, Button, lightTheme, Typography } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC } from 'react';

import { DownloadSVG, LoginSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import WalletConnectConfirmModal from './modal/confirm';
import WalletConnectFailModal from './modal/fail';
import WalletConnectLoadingModal from './modal/loading';
import { WalletItemProps } from './wallet.types';

const WalletItem: FC<WalletItemProps> = ({ icon, name }) => {
  const { connect } = useWalletKit();
  const { setModal, handleClose } = useModal();

  const openWalletModal = () =>
    setModal(<WalletConnectLoadingModal walletName="Sui Wallet" />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  const openModalConnectedResult = (isSuccess: boolean) =>
    setModal(
      isSuccess ? (
        <WalletConnectConfirmModal
          handleClose={handleClose}
          walletName="Sui Wallet"
        />
      ) : (
        <WalletConnectFailModal
          handleClose={handleClose}
          walletName="Sui Wallet"
        />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  return (
    <Box
      p="m"
      display="flex"
      justifyContent="space-between"
      cursor="pointer"
      borderRadius="0.5rem"
      transition="background 250ms ease-in-out"
      nHover={{
        backgroundColor: lightTheme.colors['surface.containerLowest'],
        '& .showButton': {
          display: 'flex',
        },
      }}
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        gap={['m', 'm', 'm', 'xl']}
        py="0.25rem"
      >
        <Box
          width="2.5rem"
          height="2.5rem"
          borderRadius="4px"
          backgroundImage={`url(${icon})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        />
        <Typography variant="medium" fontWeight="400">
          {name}
        </Typography>
      </Box>
      <Box
        className="showButton"
        display="none"
        height="3rem"
        borderRadius="0.5rem"
        alignItems="center"
        justifyContent="space-between"
        border="1px solid"
        p="0.5rem"
        gap="0.5rem"
        transition="display 250ms ease-in-out"
        borderColor={lightTheme.colors['outline.outlineVariant']}
      >
        <Button
          variant="icon"
          width="50%"
          height="80%"
          nHover={{
            backgroundColor: lightTheme.colors['surface.container'],
          }}
          color="#000"
          onClick={() => {
            openWalletModal();
            connect(name);
          }}
        >
          <LoginSVG
            maxHeight="2.5rem"
            maxWidth="2.5rem"
            height="100%"
            width="100%"
          />
        </Button>
        <Button
          variant="icon"
          width="50%"
          height="80%"
          nHover={{
            backgroundColor: lightTheme.colors['surface.container'],
          }}
          color="#000"
          onClick={() => openModalConnectedResult(true)}
        >
          <DownloadSVG
            maxHeight="2.5rem"
            maxWidth="2.5rem"
            height="100%"
            width="100%"
          />
        </Button>
      </Box>
    </Box>
  );
};

export default WalletItem;
