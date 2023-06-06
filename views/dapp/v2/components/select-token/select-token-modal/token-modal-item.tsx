import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, MouseEventHandler } from 'react';

import { HeartSVG } from '@/components/svg/v2';

import { TokenModalItemProps } from '../select-token.types';

const TokenModalItem: FC<TokenModalItemProps> = ({
  type,
  Icon,
  symbol,
  balance,
  onClick,
  selected,
  recommended,
  setFavorites,
  favoriteTokens,
}) => {
  const isFav = favoriteTokens.includes(type);

  const handleHeart: MouseEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault();
    setFavorites(
      isFav
        ? favoriteTokens.filter((favAddress) => favAddress !== type)
        : [...favoriteTokens, type]
    );
  };

  return (
    <Box
      p="m"
      display="flex"
      color="textSoft"
      cursor="pointer"
      borderRadius="m"
      alignItems="center"
      justifyContent="space-between"
      bg={selected ? '#99BBFF28' : 'none'}
      onClick={selected ? undefined : onClick}
      transition="background 500ms ease-in-out"
      nHover={{
        bg: '#99BBFF28',
      }}
    >
      <Box display="flex" alignItems="center">
        <Box>
          <Icon filled width="100%" maxWidth="2.5rem" maxHeight="2.5rem" />
        </Box>
        <Typography variant="medium" ml="xl">
          {symbol}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="m">
        <Typography variant="medium">{balance}</Typography>
        {!recommended && (
          <HeartSVG
            width="100%"
            filled={isFav}
            maxWidth="1rem"
            maxHeight="1rem"
            onClick={handleHeart}
          />
        )}
      </Box>
    </Box>
  );
};

export default TokenModalItem;
