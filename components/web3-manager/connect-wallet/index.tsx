import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useCallback, useEffect, useState } from 'react';

import { useModal } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';

import { ConnectWalletProps } from './connect-wallet.types';
import RightSidebarFooter from './footer';
import WalletList from './wallet';
import WalletConnectConfirmModal from './wallet/modal/confirm';
import WalletConnectFailModal from './wallet/modal/fail';
import WalletConnectLoadingModal from './wallet/modal/loading';
import {
  RightMenuVariants,
  RightMenuVariantsMobile,
} from './wallet/wallet-variants';

const NIGHTLY_CONNECT = 'Nightly Connect';

const ConnectWallet: FC<ConnectWalletProps> = ({
  openConnectWallet,
  setOpenConnectWallet,
}) => {
  const { isConnected, currentWallet, isError } = useWalletKit();
  const { setModal, handleClose } = useModal();
  const { colors } = useTheme() as Theme;

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const Variants = !isMobile ? RightMenuVariants : RightMenuVariantsMobile;

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
      height="100vh"
      position="fixed"
      initial="closed"
      color="onSurface"
      variants={Variants}
      background="surface"
      borderLeft="1px solid"
      flexDirection="column"
      borderLeftColor="outline.outlineVariant"
      display={['none', 'none', 'none', 'flex']}
      animate={openConnectWallet ? 'open' : 'closed'}
    >
      <Box flex="1" display="flex" overflowY="auto" background={colors.surface}>
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
