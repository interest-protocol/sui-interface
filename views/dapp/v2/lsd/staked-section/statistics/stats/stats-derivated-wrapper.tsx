import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ISuiSVG } from '@/svg';

import { SUI_BG_COLORS } from '../../../lsd.data';
import { StatsDerivatedWrapperProps } from './stats.type';

const StatsDerivatedWrapper: FC<StatsDerivatedWrapperProps> = ({
  name,
  value,
}) => (
  <Box key={v4()}>
    <Typography
      variant="extraSmall"
      fontSize="0.688rem"
      color="onSurface"
      opacity={0.6}
      mb="0.625rem"
    >
      Total {name} minted
    </Typography>
    <Box display="flex" alignItems="center" gap="0.5rem">
      <Box
        width="1.25rem"
        height="1.25rem"
        borderRadius="full"
        color="white"
        bg={SUI_BG_COLORS[name]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="0.875rem"
          height="0.875rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ISuiSVG
            maxHeight="3rem"
            maxWidth="3rem"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <Typography
        variant="extraSmall"
        fontSize="1.375rem"
        lineHeight="1.75rem"
        color="onSurface"
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

export default StatsDerivatedWrapper;
