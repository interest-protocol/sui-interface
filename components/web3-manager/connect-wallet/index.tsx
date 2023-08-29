import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useEffect } from 'react';

import { useModal } from '@/hooks';

import { ConnectWalletProps } from './connect-wallet.types';
import RightSidebarFooter from './footer';
import WalletList from './wallet';
import WalletConnectConfirmModal from './wallet/modal/confirm';
import WalletConnectFailModal from './wallet/modal/fail';
import WalletConnectLoadingModal from './wallet/modal/loading';
import { RightMenuVariants } from './wallet/wallet-variants';

const NIGHTLY_CONNECT = 'Nightly Connect';

const ConnectWallet: FC<ConnectWalletProps> = ({
  openConnectWallet,
  setOpenConnectWallet,
}) => {
  const { isConnected, currentWallet, isError } = useWalletKit();
  const { setModal, handleClose } = useModal();
  const { colors } = useTheme() as Theme;

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
    <Motion
      top="0"
      right="0"
      zIndex="5"
      width="100%"
      height="100vh"
      position="fixed"
      initial="closed"
      color="onSurface"
      background="surface"
      borderLeft="1px solid"
      variants={RightMenuVariants}
      borderLeftColor="outline.outlineVariant"
      maxWidth={['100%', '100%', '100%', '22rem']}
      display={!openConnectWallet ? 'none' : 'block'}
      animate={openConnectWallet ? 'open' : 'closed'}
    >
      <Box display="flex" background={colors.surface}>
        <WalletList
          setOpenWallet={setOpenConnectWallet}
          openWalletModal={openWalletModal}
        />
      </Box>
      <RightSidebarFooter
        isOpen={openConnectWallet}
        setIsOpen={setOpenConnectWallet}
      />
    </Motion>
  );
};

export default ConnectWallet;
