import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BaseTokenModalItemProps } from './select-token-modal.types';

const BaseTokenModalItem: FC<BaseTokenModalItemProps> = ({
  Icon,
  symbol,
  onClick,
  selected,
}) => (
  <Box
    px="m"
    py="xs"
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
    <Box height="2rem">
      <Icon width="100%" maxWidth="2rem" maxHeight="2rem" />
    </Box>
    <Typography variant="medium" ml="xs">
      {symbol}
    </Typography>
  </Box>
);

export default BaseTokenModalItem;
