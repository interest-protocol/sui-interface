import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import TokenIcon from '../token-icon';
import { IconValueProps } from './overview.type';

const IconValue: FC<IconValueProps> = ({ symbol, value }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    gap="0.5rem"
  >
    <Typography variant="extraSmall" color="onSurface">
      {value == '' ? `-- ${symbol} ` : `${value} ${symbol} `}
    </Typography>
    <TokenIcon symbol={symbol} size={1} />
  </Box>
);

export default IconValue;
