import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { always, cond, equals, T } from 'ramda';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  BASE_TOKENS_TYPES,
  Network,
  RECOMMENDED_TOKENS_TYPES,
} from '@/constants';
import { Box, Typography } from '@/elements';
import { LineLoaderSVG } from '@/svg';
import { capitalize, getSymbolByType, isType, provider } from '@/utils';

import { CurrencyDropdownBodyProps } from './select-currency.types';
import { renderData } from './select-currency.utils';

const CurrencyModalBody: FC<CurrencyDropdownBodyProps> = ({
  tab,
  coins,
  control,
  coinsMap,
  currentToken,
  favoriteTokens,
  setFavoriteTokens,
  handleSelectCurrency,
  searchTokenModalState,
  handleRemoveFromFavorite,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [askedToken, setAskedToken] = useState<Web3ManagerSuiObject | null>(
    null
  );
  const search = useWatch({ control, name: 'search' });

  const [debouncedSearch, { isPending }] = useDebounce(search, 800);

  const favoriteTokensMap = favoriteTokens.reduce(
    (acc, elem) => ({ ...acc, [elem]: true }),
    {}
  );

  const [recommendedTokens, walletTokens, favorites] = useMemo(() => {
    const recommendedTokens = RECOMMENDED_TOKENS_TYPES[Network.DEVNET].reduce(
      (acc, type) => {
        const coin = coinsMap[type];

        return coin ? acc.concat([coin]) : acc;
      },
      [] as ReadonlyArray<Web3ManagerSuiObject>
    );

    const walletTokens = coins.filter(
      ({ type }) =>
        !BASE_TOKENS_TYPES[Network.DEVNET].includes(type) &&
        !RECOMMENDED_TOKENS_TYPES[Network.DEVNET].includes(type)
    );

    const favorites = favoriteTokens.map((type) => {
      const coin = coinsMap[type];

      return coin
        ? coin
        : {
            type,
            symbol: getSymbolByType(type),
            totalBalance: BigNumber(0),
            objects: [],
            decimals: -1,
          };
    });

    return [recommendedTokens, walletTokens, favorites] as [
      ReadonlyArray<Web3ManagerSuiObject>,
      ReadonlyArray<Web3ManagerSuiObject>,
      ReadonlyArray<Web3ManagerSuiObject>
    ];
  }, [coinsMap, coins.length]);

  const filteredTokens = useMemo(() => {
    const array =
      searchTokenModalState &&
      searchTokenModalState.type &&
      coinsMap[searchTokenModalState.type]
        ? [coinsMap[searchTokenModalState.type]]
        : [];

    const filteredTokensArray =
      tab === 'recommended'
        ? recommendedTokens.filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          )
        : [...walletTokens, ...favorites].filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          );

    return array.concat(filteredTokensArray);
  }, [
    debouncedSearch,
    searchTokenModalState,
    tab,
    walletTokens,
    favorites,
    recommendedTokens,
  ]);

  useEffect(() => {
    if (
      !filteredTokens.length &&
      debouncedSearch &&
      search &&
      search === debouncedSearch &&
      !isPending() &&
      isType(debouncedSearch) &&
      (!askedToken || askedToken.type !== debouncedSearch)
    ) {
      setLoading(true);
      provider
        .getCoinMetadata(debouncedSearch)
        .then(({ symbol, decimals }) => {
          setAskedToken({
            symbol,
            decimals,
            type: debouncedSearch,
            objects: [],
            totalBalance: BigNumber(0),
          });
        })
        .catch(() => {
          const decimals = 0;
          const symbol = getSymbolByType(debouncedSearch);
          setAskedToken({
            symbol,
            decimals,
            type: debouncedSearch,
            objects: [],
            totalBalance: BigNumber(0),
          });
        })
        .finally(() => setLoading(false));
    }
  }, [filteredTokens, debouncedSearch, favoriteTokens, search]);

  useEffect(() => {
    if ((!debouncedSearch && !isPending()) || !search) setAskedToken(null);
  }, [debouncedSearch]);

  if (debouncedSearch)
    return (
      <>
        {isPending() && <LineLoaderSVG width="100%" />}
        <Box my="L" textAlign="center">
          {loading ? (
            <Typography variant="normal" color="text">
              {capitalize(t('common.load', { isLoading: 1 }))}
            </Typography>
          ) : filteredTokens.length || askedToken ? (
            renderData({
              tokens: askedToken
                ? [askedToken].concat(filteredTokens)
                : filteredTokens,
              onSelectCurrency: handleSelectCurrency,
              currentToken,
              setFavoriteTokens,
              handleRemoveFromFavorite,
              favoriteTokensMap,
            })
          ) : (
            <Typography variant="normal" color="text">
              {capitalize(t('common.notFound'))}
            </Typography>
          )}
        </Box>
      </>
    );

  return (
    <Box
      mt="M"
      display="grid"
      overflowY="auto"
      gridGap="0.3rem"
      maxHeight="20rem"
    >
      {cond([
        [
          equals('recommended'),
          always(
            renderData({
              tokens: recommendedTokens,
              onSelectCurrency: handleSelectCurrency,
              currentToken,
              setFavoriteTokens,
              favoriteTokensMap,
            })
          ),
        ],
        [
          equals('wallet'),
          always(
            renderData({
              currentToken,
              tokens: walletTokens,
              onSelectCurrency: handleSelectCurrency,
              setFavoriteTokens,
              handleRemoveFromFavorite,
              favoriteTokensMap,
            })
          ),
        ],
        [
          T,
          always(
            renderData({
              currentToken,
              noBalance: true,
              tokens: favorites,
              onSelectCurrency: handleSelectCurrency,
              handleRemoveFromFavorite,
              setFavoriteTokens,
              favoriteTokensMap,
            })
          ),
        ],
      ])(tab)}
    </Box>
  );
};

export default CurrencyModalBody;
