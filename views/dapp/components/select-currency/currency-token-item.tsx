import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { CoinData } from '@/interface';
import { FixedPointMath } from '@/sdk';
import { formatMoney, provider } from '@/utils';

import { CurrencyTokenItemProps } from './select-currency.types';

const CurrencyTokenItem: FC<CurrencyTokenItemProps> = ({
  type,
  symbol,
  decimals,
  noBalance,
  isSearching,
  totalBalance,
  currentToken,
  addLocalToken,
  DefaultTokenSVG,
  onSelectCurrency,
  removeLocalToken,
}) => {
  const t = useTranslations();
  const SVG = TOKENS_SVG_MAP[type] ?? DefaultTokenSVG;

  const isDisabled = type == currentToken;

  const handleAddToken =
    ({ type, symbol, decimals }: CoinData) =>
    () =>
      addLocalToken({
        type,
        symbol,
        decimals,
      });

  const handleSelectCurrency = () => {
    if (isDisabled) return;

    if (decimals === -1) {
      return provider
        .getCoinMetadata(type)
        .then((metadata) => {
          addLocalToken({
            type,
            symbol: metadata.symbol,
            decimals: metadata.decimals,
          }).then(() =>
            onSelectCurrency({
              type,
              symbol: metadata.symbol,
              decimals: metadata.decimals,
            })
          );
        })
        .catch(() =>
          onSelectCurrency({
            type,
            symbol,
            decimals: 0,
          })
        );
    }

    onSelectCurrency({ type, symbol, decimals });
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
      onClick={handleSelectCurrency}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      bg={isDisabled ? 'textSoft' : 'bottomBackground'}
      nHover={{
        borderColor: isDisabled ? 'transparent' : 'accent',
      }}
    >
      <Box my="M" display="flex" alignItems="center">
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
      {!!removeLocalToken && (
        <Button
          bg="error"
          variant="primary"
          nHover={{ bg: 'errorActive' }}
          onClick={removeLocalToken(type)}
        >
          {t('common.remove', { isLoading: Number(false) })}
        </Button>
      )}
      {isSearching && (
        <Button
          variant="primary"
          onClick={handleAddToken({ type, symbol, decimals })}
        >
          {t('common.add', { isLoading: Number(false) })}
        </Button>
      )}
    </Box>
  );
};

export default CurrencyTokenItem;
