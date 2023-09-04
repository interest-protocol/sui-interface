import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowLinkSVG } from '@/svg';

import { WalletActivityItemProps } from './menu-profile.types';

const WalletActivityItem: FC<WalletActivityItemProps> = ({
  Icon,
  description,
  id,
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
        <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Box>
      <Box width="calc(100% - 5rem)">
        <Typography variant="small" color="onSurface">
          {description}
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
        <a href="#viewInExplorer" target="_blank" referrerPolicy="no-referrer">
          <ArrowLinkSVG maxWidth=".875rem" maxHeight=".875rem" width="100%" />
        </a>
      </Box>
    </Box>
  );
};

export default WalletActivityItem;
