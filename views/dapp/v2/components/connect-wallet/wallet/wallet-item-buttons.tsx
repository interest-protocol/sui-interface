import { Box, Button, lightTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC } from 'react';

import { DownloadSVG, LoginSVG } from '@/components/svg/v2';

import { WalletItemButtonProps } from '../connect-wallet.types';

const WalletItemButtons: FC<WalletItemButtonProps> = ({
  name,
  hasInstalled,
  openWalletModal,
}) => {
  const { connect } = useWalletKit();

  return (
    <Box
      gap="s"
      p="s 3xs"
      height="3rem"
      display="flex"
      border="1px solid"
      alignItems="center"
      className="showButton"
      borderRadius="0.5rem"
      justifyContent="space-between"
      transition="display 250ms ease-in-out"
      borderColor={lightTheme.colors['outline.outlineVariant']}
    >
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
            openWalletModal && openWalletModal(name);
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
        >
          <a
            href="https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadSVG
              width="100%"
              height="100%"
              maxWidth="2.5rem"
              maxHeight="2.5rem"
            />
          </a>
        </Button>
      )}
    </Box>
  );
};

export default WalletItemButtons;
