import { FC } from 'react';
import { v4 } from 'uuid';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import { FixedPointMath } from '@/sdk';
import { StarSVG } from '@/svg';
import { formatMoney } from '@/utils';

import { CurrencyTokenItemProps, StaringProps } from './select-currency.types';

const Staring: FC<StaringProps> = ({ unStar, onClick, isDisabled }) => (
  <Box
    mx="M"
    opacity="1"
    width="2rem"
    height="2rem"
    display="flex"
    borderRadius="L"
    alignItems="center"
    justifyContent="center"
    nHover={{ bg: '#0002' }}
    {...(!isDisabled && { onClick, opacity: 1 })}
  >
    <StarSVG maxHeight="1rem" maxWidth="1rem" width="100%" noFill={!unStar} />
  </Box>
);

const CurrencyToken: FC<CurrencyTokenItemProps> = ({
  type,
  symbol,
  autoAdd,
  decimals,
  totalBalance,
  currentToken,
  DefaultTokenSVG,
  onSelectCurrency,
  noBalance = false,
  setFavoriteTokens,
  favoriteTokensMap = {},
  handleRemoveFromFavorite,
}) => {
  const SVG = TOKENS_SVG_MAP[type] ?? DefaultTokenSVG;

  const isDisabled = type == currentToken;

  const handleSelectCurrency = async () => {
    if (isDisabled) return;

    autoAdd && setFavoriteTokens(type);
    await onSelectCurrency({ type, symbol, decimals });
  };

  return (
    <Box
      m="XS"
      px="M"
      py="S"
      key={v4()}
      color="text"
      display="flex"
      border="1px solid"
      alignItems="center"
      borderRadius="2.5rem"
      borderColor="transparent"
      justifyContent="space-between"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      bg={isDisabled ? 'textSoft' : 'bottomBackground'}
      nHover={{
        borderColor: isDisabled ? 'transparent' : 'accent',
      }}
    >
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleSelectCurrency}
      >
        <Box py="M" display="flex" alignItems="center">
          <Box as="span" display="inline-flex" width="1rem" alignItems="center">
            <SVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
          <Typography mx="M" as="span" variant="normal">
            {symbol}
          </Typography>
        </Box>
        {!noBalance && (
          <Typography variant="normal">
            {decimals !== -1
              ? formatMoney(FixedPointMath.toNumber(totalBalance, decimals))
              : 'N/A'}
          </Typography>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        {handleRemoveFromFavorite ? (
          favoriteTokensMap[type] ? (
            <Staring unStar onClick={() => handleRemoveFromFavorite(type)} />
          ) : (
            <Staring
              isDisabled={isDisabled}
              onClick={() => setFavoriteTokens(type)}
            />
          )
        ) : null}
      </Box>
    </Box>
  );
};

export default CurrencyToken;
