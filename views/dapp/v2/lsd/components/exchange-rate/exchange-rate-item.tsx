import {
  Box,
  lightTheme,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SEMANTIC_COLORS } from '@/constants';
import { ISuiSVG, SuiSVG } from '@/svg';

import IconOverlay from '../icon-overlay';
import { ExchangeRateItemProps } from './exchange-rate.type';

const ExchangeRateItem: FC<ExchangeRateItemProps> = ({
  to,
  from,
  finalValue,
  initialValue,
  hasFirstOverlayIcon,
  hasSecondOverlayIcon,
}) => {
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
          bg={
            from === 'iSUI' && hasFirstOverlayIcon
              ? dark
                ? SEMANTIC_COLORS[3].dark
                : SEMANTIC_COLORS[3].light
              : from === 'iSUI' && !hasFirstOverlayIcon
              ? lightTheme.colors.primary
              : '#6FBCF0'
          }
        >
          {hasFirstOverlayIcon && <IconOverlay />}
          {from === 'iSUI' ? (
            <ISuiSVG width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
          ) : (
            <SuiSVG filled width="100%" maxHeight="1rem" maxWidth="1rem" />
          )}
        </Box>
        <Box
          display="flex"
          width="3.1875rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="extraSmall" color="onSurface" opacity="0.6">
            {from}
          </Typography>
          <Typography variant="large" color="onSurface">
            {initialValue}
          </Typography>
        </Box>
      </Box>
      <Typography variant="large" color="onSurface">
        =
      </Typography>
      <Box display="flex" gap="l">
        <Box
          p="s"
          color="white"
          display="flex"
          bg={
            to === 'iSUI' && hasSecondOverlayIcon
              ? dark
                ? SEMANTIC_COLORS[3].dark
                : SEMANTIC_COLORS[3].light
              : to === 'iSUI' && !hasSecondOverlayIcon
              ? lightTheme.colors.primary
              : '#6FBCF0'
          }
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          aspectRatio="1/1"
          alignItems="center"
          justifyContent="center"
        >
          {hasSecondOverlayIcon && <IconOverlay />}
          {to === 'iSUI' ? (
            <ISuiSVG width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
          ) : (
            <SuiSVG filled width="100%" maxHeight="1rem" maxWidth="1rem" />
          )}
        </Box>
        <Box
          display="flex"
          width="3.1875rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="extraSmall" color="onSurface" opacity="0.6">
            {to}
          </Typography>
          <Typography variant="large" color="onSurface">
            {finalValue}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangeRateItem;
