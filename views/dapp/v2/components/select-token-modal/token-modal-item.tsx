import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC, MouseEventHandler, useState } from 'react';

import { HeartSVG } from '@/components/svg/v2';

import { TokenModalItemProps } from './select-token-modal.types';

const TokenModalItem: FC<TokenModalItemProps> = ({
  type,
  Icon,
  symbol,
  balance,
  onClick,
  selected,
  isFavorite,
  recommended,
  favoriteForm,
}) => {
  const [isFav, setIsFav] = useState(
    !!isFavorite || favoriteForm?.getValues('tokens').includes(type)
  );

  const handleHeart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const favoriteTokens = favoriteForm?.getValues('tokens') ?? [];

    if (isFavorite) {
      favoriteForm?.setValue(
        'tokens',
        favoriteTokens.filter((favAddress) => favAddress !== type)
      );
    } else {
      setIsFav(!isFav);
      favoriteForm?.setValue(
        'tokens',
        isFav
          ? favoriteTokens.filter((favAddress) => favAddress !== type)
          : [...favoriteTokens, type]
      );
    }
  };

  return (
    <Box
      p="m"
      display="flex"
      color="textSoft"
      cursor="pointer"
      borderRadius="m"
      alignItems="center"
      nHover={{ bg: '#99BBFF28' }}
      justifyContent="space-between"
      bg={selected ? '#99BBFF28' : 'none'}
      onClick={selected ? undefined : onClick}
      transition="background 500ms ease-in-out"
    >
      <Box display="flex" alignItems="center">
        <Box>
          <Icon filled width="100%" maxWidth="2.8rem" maxHeight="2.8rem" />
        </Box>
        <Typography variant="medium" ml="xl">
          {symbol}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="m">
        <Typography variant="medium">{balance}</Typography>
        {!recommended && (
          <Button zIndex="10" variant="icon" onClick={handleHeart}>
            <HeartSVG
              width="100%"
              filled={isFav}
              maxWidth="1rem"
              maxHeight="1rem"
            />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TokenModalItem;
