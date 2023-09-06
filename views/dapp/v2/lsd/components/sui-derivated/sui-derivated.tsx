import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ISuiSVG } from '@/svg';

import { SUI_BG_COLORS } from '../../lsd.data';
import { SuiDerivatedProps } from './sui.types';

const SuiDerivated: FC<SuiDerivatedProps> = ({
  symbol,
  withSymbol,
  boxSize,
  iconSize,
}) => {
  return (
    <Box display="flex" gap="0.5rem" alignItems="center">
      <Box
        width={boxSize}
        height={boxSize}
        borderRadius="full"
        color="white"
        bg={SUI_BG_COLORS[symbol]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={iconSize}
          height={iconSize}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ISuiSVG
            maxHeight={boxSize}
            maxWidth={boxSize}
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      {withSymbol && (
        <Typography variant="extraSmall" fontSize={iconSize} color="onSurface">
          {symbol}
        </Typography>
      )}
    </Box>
  );
};

export default SuiDerivated;
