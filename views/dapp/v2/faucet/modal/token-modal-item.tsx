import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { TokenModalItemProps } from '../faucet.types';

const TokenModalItem: FC<TokenModalItemProps> = ({
  onSelectCurrency,
  symbol,
  type,
}) => {
  const SVG = TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default;

  return (
    <Motion
      overflowY="auto"
      position="relative"
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      mx="xs"
      overflow="hidden"
      onClick={() => onSelectCurrency(type, symbol)}
    >
      <Box
        p="m"
        display="flex"
        color="textSoft"
        cursor="pointer"
        borderRadius="m"
        alignItems="center"
        justifyContent="space-between"
        transition="background 500ms ease-in-out"
        nHover={{ bg: '#99BBFF28' }}
      >
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="primary"
            borderRadius="m"
            color="inverseOnSurface"
            mr="xl"
            height="2.5rem"
            width="2.5rem"
          >
            <SVG
              maxHeight="100%"
              maxWidth="2.5rem"
              width="1.5rem"
              height="1.5rem"
            />
          </Box>
          <Typography variant="medium">{symbol}</Typography>
        </Box>
      </Box>
    </Motion>
  );
};

export default TokenModalItem;
