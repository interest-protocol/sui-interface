import {
  Box,
  Button,
  Theme,
  TooltipWrapper,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DownloadSVG } from '@/components/svg/v2';

import { WalletItemButtonProps } from '../connect-wallet.types';

const WalletItemButtons: FC<WalletItemButtonProps> = ({ installLink }) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

  return (
    <TooltipWrapper
      bg={colors['surface']}
      tooltipPosition="top"
      width="max-content"
      tooltipContent={
        <Typography
          variant="extraSmall"
          color={colors['onSurface']}
          textTransform="capitalize"
        >
          {t(
            !installLink
              ? 'common.v2.connectWallet.tooltip.connect'
              : 'common.v2.connectWallet.tooltip.install'
          )}
        </Typography>
      }
    >
      <Box
        p="0.25rem"
        height="3rem"
        display="flex"
        alignItems="center"
        className="showButton"
        borderRadius="0.5rem"
        justifyContent="space-between"
        transition="display 250ms ease-in-out"
        border={installLink ? '1px solid' : 'none'}
        borderColor={colors['outline.outlineVariant']}
      >
        {installLink && (
          <Button
            variant="icon"
            nHover={{
              backgroundColor: colors['surface.container'],
            }}
            color="onSurface"
          >
            <a target="_blank" href={installLink} rel="noopener noreferrer">
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
