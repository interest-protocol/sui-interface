import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';
import { v4 } from 'uuid';

import { DotsSVG, DoubleArrowSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import WalletConnectConfirmModal from './modal/confirm';
import WalletConnectFailModal from './modal/fail';
import WalletConnectLoadingModal from './modal/loading';
import WalletItem from './wallet-item';
import { DEFAULT_WALLETS, WALLET_NAME_MAP } from './wallet-manager.data';
import { IWalletItem, WalletManagerProps } from './wallet-manager.types';

const NIGHTLY_CONNECT = 'Nightly Connect';

const itemVariants = {
  open: {
    x: '0rem',
  },
  closed: {
    x: '19.75rem',
  },
};

const WalletManager: FC<WalletManagerProps> = ({
  openConnectWallet,
  setOpenConnectWallet,
}) => {
  const t = useTranslations();
  const { wallets } = useWalletKit();
  const { colors } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const { isConnected, currentWallet, isError } = useWalletKit();

  const mixedWallets: Array<IWalletItem> = (wallets ?? [])
    .reduce(
      (acc, { icon, name }) => [
        {
          icon,
          name,
          displayName: icon ? WALLET_NAME_MAP[icon] ?? name : name,
        },
        ...acc.filter((item) => item.icon !== icon),
      ],
      DEFAULT_WALLETS
    )
    .sort(({ installLink }) => (installLink ? 1 : -1));

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
      p="xl"
      top="0"
      right="0"
      zIndex="5"
      height="100vh"
      display="grid"
      width="19.75rem"
      position="fixed"
      color="onSurface"
      background="surface"
      variants={itemVariants}
      boxShadow="0 0 10rem #6663"
      gridTemplateRows="4rem 1fr 4rem"
      animate={openConnectWallet ? 'open' : 'closed'}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          variant="medium"
          letterSpacing="5%"
          textTransform="uppercase"
        >
          {t('common.v2.connectWallet.title')}
        </Typography>
        <Box
          display="none"
          // display="flex"
          width="2.5rem"
          height="2.5rem"
          cursor="pointer"
          border="1px solid"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
          borderColor="outline.outlineVariant"
          nHover={{ borderColor: 'outline' }}
        >
          <DotsSVG maxWidth="1rem" maxHeight="1rem" width="100%" filled />
        </Box>
      </Box>
      <Box
        gap="s"
        height="100%"
        display="flex"
        overflowY="auto"
        flexDirection="column"
      >
        {mixedWallets.map(({ icon, name, displayName, installLink }) => (
          <WalletItem
            key={v4()}
            icon={icon}
            name={name}
            displayName={displayName}
            installLink={installLink}
            openWalletModal={openWalletModal}
          />
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          width="2.5rem"
          height="2.5rem"
          minWidth="2.5rem"
          borderRadius="m"
          cursor="pointer"
          color="onSurface"
          minHeight="2.5rem"
          border="1px solid"
          position="relative"
          alignItems="center"
          justifyContent="center"
          borderColor="outline.outlineVariant"
          onClick={() => setOpenConnectWallet(false)}
          nHover={{
            transition: 'all 300ms ease-in-out',
            backgroundColor: `${colors.primary}14`,
          }}
        >
          <DoubleArrowSVG
            width="100%"
            height="100%"
            maxWidth="0.625rem"
            maxHeight="0.625rem"
          />
        </Box>
      </Box>
    </Motion>
  );
};

export default WalletManager;
