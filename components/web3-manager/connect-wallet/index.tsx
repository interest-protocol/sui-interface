import { Box, darkTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useEffect } from 'react';

import { useModal } from '@/hooks';

import { ConnectWalletProps } from './connect-wallet.types';
import IllustrationSection from './illustration/illustration-section';
import WalletList from './wallet';
import WalletConnectConfirmModal from './wallet/modal/confirm';
import WalletConnectFailModal from './wallet/modal/fail';
import WalletConnectLoadingModal from './wallet/modal/loading';

const NIGHTLY_CONNECT = 'Nightly Connect';

const ConnectWallet: FC<ConnectWalletProps> = ({
  openConnectWallet,
  setOpenConnectWallet,
}) => {
  const { isConnected, currentWallet, isError } = useWalletKit();
  const { setModal, handleClose } = useModal();

  const openModalConnected = () => {
    setModal(
      <WalletConnectConfirmModal
        handleClose={() => {
          handleClose();
          setOpenConnectWallet(false);
        }}
        walletName={currentWallet?.name || ''}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );
    setTimeout(() => {
      handleClose();
      setOpenConnectWallet(false);
    }, 3000);
  };

  const openModalConnectedFailed = () =>
    setModal(<WalletConnectFailModal handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  const openWalletModal = (walletName: string) =>
    walletName != NIGHTLY_CONNECT &&
    setModal(<WalletConnectLoadingModal walletName={walletName} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  useEffect(() => {
    openConnectWallet
      ? isConnected
        ? openModalConnected()
        : isError && openModalConnectedFailed()
      : handleClose();
  }, [isConnected, isError, openConnectWallet]);

  return (
    <Box
      top="0"
      left="0"
      zIndex="5"
      color="text"
      width="100vw"
      height="100vh"
      position="fixed"
      background="surface"
      display={!openConnectWallet ? 'none' : 'block'}
    >
      <Box display="flex" background={darkTheme.colors.surface}>
        <WalletList
          setOpenWallet={setOpenConnectWallet}
          openWalletModal={openWalletModal}
        />
        <IllustrationSection setOpenWallet={setOpenConnectWallet} />
      </Box>
    </Box>
  );
};

export default ConnectWallet;
