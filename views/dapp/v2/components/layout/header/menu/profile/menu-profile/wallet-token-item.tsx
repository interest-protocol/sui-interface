import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  BNBSVG,
  BTCSVG,
  ETHSVG,
  SUISVG,
  USDCSVG,
  USDTSVG,
} from '@/components/svg/v2';

import { WalletTokenItemProps } from './menu-profile.types';

const WalletTokenItem: FC<WalletTokenItemProps> = ({
  symbol,
  balance,
  totalBalance,
}) => {
  const { colors } = useTheme() as Theme;

  return (
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
      <Box p="s" bg="inverseSurface" display="flex" borderRadius="m">
        {symbol === 'BNB' ? (
          <BNBSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        ) : symbol === 'BTC' ? (
          <BTCSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        ) : symbol === 'ETH' ? (
          <ETHSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        ) : symbol === 'SUI' ? (
          <SUISVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        ) : symbol === 'USDT' ? (
          <USDTSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        ) : symbol === 'USDC' ? (
          <USDCSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        ) : (
          '?'
        )}
      </Box>
      <Box width="100%">
        <Typography variant="extraSmall" color="onSurface" textAlign="right">
          {balance}
        </Typography>
        <Typography
          width="100%"
          textAlign="right"
          variant="medium"
          overflow="hidden"
          color="onSurface"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {totalBalance.toNumber()}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletTokenItem;
