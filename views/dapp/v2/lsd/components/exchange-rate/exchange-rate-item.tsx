import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ISuiPCSVG, ISuiSVG, SuiSVG } from '@/svg';

import { ExchangeRateItemProps } from './exchange-rate.type';

const ExchangeRateItem: FC<ExchangeRateItemProps> = ({
  to,
  from,
  finalValue,
  initialValue,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" gap="l">
        <Box
          color="white"
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="m"
          aspectRatio="1/1"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          {from === 'iSui' ? (
            <ISuiSVG filled width="100%" maxHeight="2.5rem" maxWidth="2.5rem" />
          ) : (
            <ISuiPCSVG
              filled
              width="100%"
              maxHeight="2.5rem"
              maxWidth="2.5rem"
            />
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
          <SuiSVG filled width="100%" maxHeight="1rem" maxWidth="1rem" />
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
