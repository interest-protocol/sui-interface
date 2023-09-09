import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { SEMANTIC_COLORS } from '@/constants';
import { ISuiSVG } from '@/svg';

import IconOverlay from '../icon-overlay';

const ISUIPcToSUI: FC = () => {
  const { dark } = useTheme() as Theme;
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" gap="l">
        <Box
          p="s"
          color="white"
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          aspectRatio="1/1"
          position="relative"
          alignItems="center"
          justifyContent="center"
          bg={dark ? SEMANTIC_COLORS[3].dark : SEMANTIC_COLORS[3].light}
        >
          <IconOverlay />
          <ISuiSVG width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
        </Box>
        <Box
          display="flex"
          width="3.125rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="extraSmall" color="onSurface" opacity="0.6">
            iSUI
          </Typography>
          <Typography variant="large" color="onSurface">
            1
          </Typography>
        </Box>
      </Box>
      <Typography variant="displaySmall" color="onSurface">
        =
      </Typography>
      <Box display="flex" gap="l">
        <Box
          p="s"
          color="white"
          display="flex"
          bg="#6FBCF0"
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          aspectRatio="1/1"
          alignItems="center"
          justifyContent="center"
        >
          <SUISVG width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
        </Box>
        <Box
          display="flex"
          width="3.125rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="extraSmall" color="onSurface" opacity="0.6">
            SUI
          </Typography>
          <Typography variant="large" color="onSurface">
            1
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ISUIPcToSUI;
