import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ISuiPSVG, ISuiSVG, ISuiYNSVG, SUISVG } from '@/components/svg/v2';
import { TOKEN_SYMBOL } from '@/lib';

import { IconValueProps } from './overview.type';

const IconValue: FC<IconValueProps> = ({ symbol, value }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    gap="0.5rem"
  >
    <Typography variant="extraSmall" color="onSurface">
      {value ? `${value} ${symbol} ` : '--'}
    </Typography>
    <Box
      display="flex"
      width="1.25rem"
      height="1.25rem"
      overflow="hidden"
      borderRadius="full"
      alignItems="center"
      justifyContent="center"
    >
      {symbol == TOKEN_SYMBOL.SUI ? (
        <SUISVG
          filled
          maxHeight="1.25rem"
          maxWidth="1.25rem"
          width="100%"
          height="100%"
        />
      ) : symbol == TOKEN_SYMBOL.ISUI ? (
        <ISuiSVG
          maxHeight="1.25rem"
          maxWidth="1.25rem"
          width="100%"
          height="100%"
          filled
        />
      ) : symbol == 'iSui-PC' ? (
        <ISuiPSVG
          maxHeight="1.25rem"
          maxWidth="1.25rem"
          width="100%"
          height="100%"
        />
      ) : (
        <ISuiYNSVG
          maxHeight="1.25rem"
          maxWidth="1.25rem"
          width="100%"
          height="100%"
        />
      )}
    </Box>
  </Box>
);
export default IconValue;
