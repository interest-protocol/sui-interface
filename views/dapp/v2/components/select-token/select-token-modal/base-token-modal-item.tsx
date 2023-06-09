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
    border="1px solid"
    alignItems="center"
    borderRadius="1.5rem"
    justifyContent="space-between"
    transition="all 500ms ease-in-out"
    bg={selected ? '#99BBFF28' : 'none'}
    onClick={selected ? undefined : onClick}
    borderColor={selected ? 'transparent' : 'outline.outlineVariant'}
    nHover={{
      bg: '#99BBFF28',
      borderColor: 'transparent',
    }}
  >
    <Box maxHeight="1.5rem">
      <Icon width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
    </Box>
    <Typography variant="medium" ml="s">
      {symbol}
    </Typography>
  </Box>
);

export default BaseTokenModalItem;
