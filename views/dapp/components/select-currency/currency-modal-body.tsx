import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { always, cond, equals, T } from 'ramda';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  BASE_TOKENS_TYPES,
  COIN_DECIMALS,
  COIN_SYMBOL,
  RECOMMENDED_TOKENS_TYPES,
} from '@/constants';
import { Box, Typography } from '@/elements';
import { LineLoaderSVG } from '@/svg';
import { capitalize, getSymbolByType, isType } from '@/utils';

import { CurrencyDropdownBodyProps } from './select-currency.types';
import { renderData } from './select-currency.utils';

const CurrencyModalBody: FC<CurrencyDropdownBodyProps> = ({
  tab,
  coins,
  control,
  coinsMap,
  currentToken,
  favoriteTokens,
  fetchingMetaData,
  setFavoriteTokens,
  handleSelectCurrency,
  searchTokenModalState,
  handleRemoveFromFavorite,
  provider,
  network,
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
    const recommendedTokens: ReadonlyArray<Web3ManagerSuiObject> =
      RECOMMENDED_TOKENS_TYPES[network].map(
        (type) =>
          coinsMap[type] ?? {
            type,
            symbol: COIN_SYMBOL[network][type],
            decimals: COIN_DECIMALS[network][type],
            objects: [],
            totalBalance: BigNumber(0),
          }
      );

    const walletTokens = coins.filter(
      ({ type }) =>
        !BASE_TOKENS_TYPES[network].includes(type) &&
        !RECOMMENDED_TOKENS_TYPES[network].includes(type)
    );

    const favorites = favoriteTokens.map(
      (type) =>
        coinsMap[type] ?? {
          type,
          symbol: getSymbolByType(type),
          totalBalance: BigNumber(0),
          objects: [],
          decimals: 0,
        }
    );

    return [recommendedTokens, walletTokens, favorites] as [
      ReadonlyArray<Web3ManagerSuiObject>,
      ReadonlyArray<Web3ManagerSuiObject>,
      ReadonlyArray<Web3ManagerSuiObject>
    ];
  }, [coinsMap, coins.length, network]);

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
    network,
  ]);

  useEffect(() => {
    if (
      search &&
      !isPending() &&
      debouncedSearch &&
      !filteredTokens.length &&
      isType(debouncedSearch) &&
      search === debouncedSearch &&
      (!askedToken || askedToken.type !== debouncedSearch)
    ) {
      setLoading(true);
      provider
        .getCoinMetadata({ coinType: debouncedSearch })
        .then(({ symbol, decimals }) => {
          setAskedToken({
            symbol,
            decimals,
            type: debouncedSearch,
            objects: [],
            totalBalance: BigNumber(0),
          });
        })
        .catch(() => askedToken && setAskedToken(null))
        .finally(() => setLoading(false));
    }
  }, [filteredTokens, debouncedSearch, favoriteTokens, search]);

  useEffect(() => {
    if ((!debouncedSearch && !isPending()) || !search) setAskedToken(null);
  }, [debouncedSearch]);

  if (debouncedSearch)
    return (
      <>
        {(loading || fetchingMetaData) && <LineLoaderSVG width="100%" />}
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
              favoriteTokensMap,
              handleRemoveFromFavorite,
              noBalance: !!askedToken,
              autoAdd: !!askedToken,
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
    <>
      {(loading || fetchingMetaData) && <LineLoaderSVG width="100%" />}
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
                currentToken,
                setFavoriteTokens,
                favoriteTokensMap,
                tokens: recommendedTokens,
                onSelectCurrency: handleSelectCurrency,
              })
            ),
          ],
          [
            equals('wallet'),
            always(
              renderData({
                currentToken,
                setFavoriteTokens,
                favoriteTokensMap,
                tokens: walletTokens,
                handleRemoveFromFavorite,
                onSelectCurrency: handleSelectCurrency,
              })
            ),
          ],
          [
            T,
            always(
              renderData({
                currentToken,
                tokens: favorites,
                setFavoriteTokens,
                favoriteTokensMap,
                handleRemoveFromFavorite,
                onSelectCurrency: handleSelectCurrency,
              })
            ),
          ],
        ])(tab)}
      </Box>
    </>
  );
};

export default CurrencyModalBody;
