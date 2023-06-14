import { Box, Button, Modal, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import CardSection from '@/views/dapp/v2/lending-protocol/card-section';
import LoadingContent from '@/views/dapp/v2/lending-protocol/modal/loading-content';
import ResultContent from '@/views/dapp/v2/lending-protocol/modal/result-content';

import Wallet from '../../wallet';
import MenuBackButton from './menu-back-button';
import MenuButton from './menu-button';
import MenuDesktop from './menu-desktop';
import MenuMobile from './menu-mobile';

const Menu: FC = () => {
  const { query } = useRouter();
  const [isOpen, setIsOpen] = useState(Boolean(query.menu));
  const [isSettings, setIsSettings] = useState(Boolean(query.settings));
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [claimable, setClaimable] = useState<boolean>(false);

  const claimableValue = 0;
  const claimablePriceValue = 0;

  useEffect(() => {
    claimableValue > 0 ? setClaimable(true) : setClaimable(false);
  }, [openModal]);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirm(true);
    }, 5000);
  };

  useEffect(() => {
    setLoading(false);
    setConfirm(false);
  }, [closed]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenSettings = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('settings', 'true');
    window.history.pushState('', '', url.toString());
    setIsSettings(true);
  };

  const handleCloseSettings = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('settings');
    window.history.pushState('', '', url.toString());
    setIsSettings(false);
  };

  const handleOpen = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('menu', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpen(true);
  };

  const handleClose = () => {
    handleCloseSettings();
    const url = new URL(window.location.href);
    url.searchParams.delete('menu');
    window.history.pushState('', '', url.toString());
    setIsOpen(false);
  };

  return (
    <Box position="relative" width={['100%', '100%', '100%', 'unset']}>
      <Box
        zIndex="2"
        display="flex"
        position="relative"
        flexDirection="row-reverse"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          {!isOpen && (
            <Box mr="xl">
              <Wallet />
            </Box>
          )}
          <MenuButton
            isOpen={isOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Box>
        <MenuBackButton
          handleBack={handleCloseSettings}
          showButton={isOpen && isSettings}
        />
        <Button
          marginRight="m"
          marginLeft="auto"
          variant="outline"
          onClick={handleOpenModal}
        >
          0.0000
        </Button>
      </Box>
      <MenuDesktop isOpen={isOpen} handleClose={handleClose} />
      <MenuMobile
        isOpen={isOpen}
        isSettings={isSettings}
        handleOpenSettings={handleOpenSettings}
      />
      <Modal
        allowClose
        hasCloseButton
        onClose={handleOpenModal}
        isOpen={openModal}
        title="IPX Balance"
        buttonProps={{
          display: confirm || loading ? 'none' : 'block',
          variant: claimable ? 'filled' : 'outline',
          textAlign: 'center',
          padding: 'min(20px, 5%)',
          onClick: !loading ? handleConfirm : undefined,
        }}
        buttonText="Claim Rewards"
      >
        {!loading && !confirm ? (
          <Box
            display="flex"
            p="4xl"
            alignItems="center"
            flexDirection="column"
          >
            <Box mb="m">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_394_23967)">
                  <g clipPath="url(#clip1_394_23967)">
                    <rect width="40" height="40" fill="#99BBFF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.6024 13.1692C17.534 13.1692 18.2891 13.9243 18.2891 14.8559V16.5907H16.5543C15.6227 16.5907 14.8676 15.8356 14.8676 14.9041V13.1692H16.6024ZM19.9758 16.5907C19.0443 16.5907 18.2891 17.3459 18.2891 18.2774V20.0123H20.024C20.9555 20.0123 21.7107 19.2571 21.7107 18.3256V16.5907H19.9758ZM21.7107 14.8559C21.7107 13.9243 22.4658 13.1692 23.3973 13.1692H25.1322V14.9041C25.1322 15.8356 24.3771 16.5907 23.4455 16.5907H21.7107V14.8559ZM20.024 23.4338C20.9555 23.4338 21.7107 24.189 21.7107 25.1205V26.8553H19.9758C19.0443 26.8553 18.2891 26.1002 18.2891 25.1687V23.4338H20.024ZM18.2891 21.6989C18.2891 20.7674 17.534 20.0123 16.6024 20.0123H14.8676L14.8676 18.2774C14.8676 17.3459 14.1124 16.5907 13.1809 16.5907H11.446V18.3256C11.446 19.2571 12.2012 20.0123 13.1327 20.0123L14.8676 20.0123V21.7471C14.8676 22.6787 15.6227 23.4338 16.5543 23.4338H18.2891V21.6989ZM23.3973 20.0123C22.4658 20.0123 21.7107 20.7674 21.7107 21.6989V23.4338H23.4455C24.3771 23.4338 25.1322 22.6787 25.1322 21.7471V20.0123L26.8671 20.0123C27.7986 20.0123 28.5537 19.2571 28.5537 18.3256V16.5907H26.8189C25.8873 16.5907 25.1322 17.3459 25.1322 18.2774V20.0123H23.3973Z"
                      fill="#0055FF"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_394_23967">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_394_23967">
                    <rect width="40" height="40" rx="2" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
            <Typography variant="title6">0.0000</Typography>
            <Typography variant="small">$000 USD</Typography>
          </Box>
        ) : (
          ''
        )}
        {loading ? (
          <LoadingContent message="Collecting ..." />
        ) : confirm && !loading ? (
          <ResultContent message="Collected" />
        ) : (
          ''
        )}
        <CardSection
          isModal
          padding="0 0 .625rem"
          alignTitle="center"
          title="Unclaimed Rewards"
          lines={[
            { description: 'IPX Rewards ', value: claimableValue + '' },
            {
              description: 'IPX Rewards in USD ',
              value: '$' + claimablePriceValue,
            },
          ]}
        />
      </Modal>
    </Box>
  );
};

export default Menu;
