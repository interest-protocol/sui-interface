import { Box, Button, lightTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useEffect } from 'react';

import { DownloadSVG, LoginSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import WalletConnectConfirmModal from './modal/confirm';
import WalletConnectFailModal from './modal/fail';
import WalletConnectLoadingModal from './modal/loading';
import { WalletItemButtonProps } from './wallet.types';

const WalletItemButtons: FC<WalletItemButtonProps> = ({
  name,
  hasInstalled,
}) => {
  const { connect, isConnecting, isError } = useWalletKit();
  const { setModal, handleClose } = useModal();

  const openWalletModal = () =>
    setModal(<WalletConnectLoadingModal walletName={name} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: false,
    });

  const openModalConnectedResult = (isSuccess: boolean) =>
    setModal(
      isSuccess ? (
        <WalletConnectConfirmModal
          handleClose={handleClose}
          walletName={name}
        />
      ) : (
        <WalletConnectFailModal handleClose={handleClose} walletName={name} />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  useEffect(() => {
    if (isConnecting)
      if (isError) openModalConnectedResult(false);
      else openWalletModal();
    else {
      isError
        ? openModalConnectedResult(false)
        : openModalConnectedResult(true);
    }
  }, [isConnecting, isError]);

  return (
    <Box
      className="showButton"
      display="flex"
      height="3rem"
      borderRadius="0.5rem"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid"
      p="0.5rem 0.125rem"
      gap="0.5rem"
      transition="display 250ms ease-in-out"
      borderColor={lightTheme.colors['outline.outlineVariant']}
    >
      {isConnecting ? '1' : '0'}
      {isError ? 'A' : 'B'}
      {hasInstalled ? (
        <Button
          variant="icon"
          width={hasInstalled ? '100%' : '50%'}
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
      ) : (
        <Button
          variant="icon"
          width={hasInstalled ? '50%' : '100%'}
          height="80%"
          nHover={{
            backgroundColor: lightTheme.colors['surface.container'],
          }}
          color="#000"
          onClick={() => openModalConnectedResult(true)}
        >
          <a
            href="https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadSVG
              maxHeight="2.5rem"
              maxWidth="2.5rem"
              height="100%"
              width="100%"
            />
          </a>
        </Button>
      )}
    </Box>
  );
};

export default WalletItemButtons;
