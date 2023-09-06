import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  BorrowSVG,
  LiquiditySVG,
  SupplySVG,
  SwapSVG,
} from '@/components/svg/v2';
import { EXPLORER_URL } from '@/constants';
import { useNetwork } from '@/hooks';
import { ArrowLinkSVG } from '@/svg';

import { WalletActivityItemProps } from './menu-profile.types';

const WalletActivityItem: FC<WalletActivityItemProps> = ({
  description,
  id,
}) => {
  const { network } = useNetwork();
  const { colors } = useTheme() as Theme;

  const explorerLink = `${EXPLORER_URL[network]}/txblock/${id}`;
  return (
    <a
      href={explorerLink}
      target="_blank"
      referrerPolicy="no-referrer"
      rel="noreferrer"
    >
      <Box
        px="xl"
        gap="l"
        py=".625rem"
        display="flex"
        cursor="pointer"
        alignItems="center"
        transition="background-color .5s"
        nHover={{
          bg: colors['surface.containerHigh'],
        }}
      >
        <Box
          p="s"
          aspectRatio="1/1"
          display="flex"
          borderRadius="m"
          alignItems="center"
          bg="inverseSurface"
          justifyContent="center"
        >
          {description.includes('SwapToken') ? (
            <SwapSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('PoolCreated') ? (
            <LiquiditySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('AddLiquidity') ? (
            <LiquiditySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('RemoveLiquidity') ? (
            <LiquiditySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('Deposit') ? (
            <SupplySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('Withdraw') ? (
            <BorrowSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('Borrow') ? (
            <BorrowSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('Repay') ? (
            <SupplySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('EnterMarket') ? (
            <LiquiditySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : description.includes('ExitMarket') ? (
            <LiquiditySVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          ) : (
            ''
          )}
        </Box>
        <Box width="calc(100% - 5rem)">
          <Typography variant="small" color="onSurface">
            {description.includes('SwapToken')
              ? 'Swap'
              : description.includes('PoolCreated')
              ? 'Pool Created'
              : description.includes('AddLiquidity')
              ? 'Providing liquidity'
              : description.includes('RemoveLiquidity')
              ? 'Remove Liquidity'
              : description.includes('Deposit')
              ? 'Deposit'
              : description.includes('Withdraw')
              ? 'Withdraw'
              : description.includes('Borrow')
              ? 'Borrow'
              : description.includes('Repay')
              ? 'Repay'
              : description.includes('EnterMarket')
              ? 'Enter Market'
              : description.includes('ExitMarket')
              ? 'Exit Market'
              : ''}
          </Typography>
          <Typography
            width="100%"
            overflow="hidden"
            color="outline"
            whiteSpace="nowrap"
            variant="extraSmall"
            textOverflow="ellipsis"
          >
            {id}
          </Typography>
        </Box>
        <Box color="onSurface">
          <ArrowLinkSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />
        </Box>
      </Box>
    </a>
  );
};

export default WalletActivityItem;
