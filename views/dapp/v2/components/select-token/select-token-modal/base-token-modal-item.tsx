import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BaseTokenModalItemProps } from '../select-token.types';

const BaseTokenModalItem: FC<BaseTokenModalItemProps> = ({
  Icon,
  symbol,
  onClick,
  selected,
}) => (
  <Box
    p="m"
    display="flex"
    color="textSoft"
    cursor="pointer"
    borderRadius="m"
    alignItems="center"
    justifyContent="space-between"
    bg={selected ? 'textAccent' : 'none'}
    onClick={selected ? undefined : onClick}
    transition="background 500ms ease-in-out"
    nHover={{
      bg: 'textAccent',
    }}
  >
    <Box display="flex" alignItems="center">
      <Box>
        <Icon filled width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
      </Box>
      <Typography variant="medium" ml="s">
        {symbol}
      </Typography>
    </Box>
  </Box>
);

export default BaseTokenModalItem;
