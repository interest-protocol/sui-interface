import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { WalletTokenItemProps } from './menu-profile.types';

const WalletTokenItem: FC<WalletTokenItemProps> = ({ Icon }) => {
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
        <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Box>
      <Box width="100%">
        <Typography variant="extraSmall" color="onSurface" textAlign="right">
          $0
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
          0
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletTokenItem;
