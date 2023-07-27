import {
  Box,
  Button,
  darkTheme,
  lightTheme,
  TooltipWrapper,
  Typography,
} from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DownloadSVG, LoginSVG } from '@/components/svg/v2';

import { WalletItemButtonProps } from '../connect-wallet.types';

const WalletItemButtons: FC<WalletItemButtonProps> = ({
  name,
  hasInstalled,
  openWalletModal,
}) => {
  const t = useTranslations();
  const { connect } = useWalletKit();

  return (
    <TooltipWrapper
      bg={darkTheme.colors['surface']}
      tooltipPosition="top"
      width="max-content"
      tooltipContent={
        <Typography
          variant="extraSmall"
          color={darkTheme.colors['onSurface']}
          textTransform="capitalize"
        >
          {hasInstalled
            ? t('connectWallet.tooltip.connect')
            : t('connectWallet.tooltip.install')}
        </Typography>
      }
    >
      <Box
        p="0.25rem"
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
    </TooltipWrapper>
  );
};

export default WalletItemButtons;
