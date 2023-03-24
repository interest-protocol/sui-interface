import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { always, assoc, cond, dissoc, equals, T } from 'ramda';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { Switch } from '@/components';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  BASE_TOKENS_TYPES,
  Network,
  RECOMMENDED_TOKENS_TYPES,
} from '@/constants';
import { Box, Button, InfiniteScroll, Typography } from '@/elements';
import { useLocalStorage } from '@/hooks';
import { CoinData } from '@/interface';
import { LineLoaderSVG, TimesSVG } from '@/svg';
import { capitalize, getSymbolByType, isType, noop, provider } from '@/utils';

import {
  CurrencyDropdownProps,
  OnSelectCurrency,
  RemoveLocalToken,
} from './select-currency.types';
import { renderData } from './select-currency.utils';

const CurrencyDropdown: FC<CurrencyDropdownProps> = ({
  Input,
  control,
  isSearching,
  toggleModal,
  currentToken,
  onSelectCurrency,
  searchTokenModalState,
  coinsMap,
  coins,
  addLocalToken,
}) => {
  const t = useTranslations();
  const search = useWatch({ control, name: 'search' });
  const searchedToken = searchTokenModalState;
  const [tab, setTab] = useState<'recommended' | 'wallet' | 'added'>(
    'recommended'
  );
  const [askedToken, setAskedToken] = useState<Web3ManagerSuiObject | null>(
    null
  );
  const [debouncedSearch] = useDebounce(search, 800);
  const [localTokens, setLocalTokens] = useLocalStorage<
    Record<string, CoinData>
  >('sui-interest-tokens', {});

  const handleSelectCurrency: OnSelectCurrency = (args) => {
    onSelectCurrency(args);
    toggleModal?.();
  };

  const [baseTokens, recommendedTokens, walletTokens, addedTokens] =
    useMemo(() => {
      const baseTokens = BASE_TOKENS_TYPES[Network.DEVNET].reduce(
        (acc, type) => {
          const coin = coinsMap[type];

          return coin ? acc.concat([coin]) : acc;
        },
        [] as ReadonlyArray<Web3ManagerSuiObject>
      );

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

      const addedTokens: ReadonlyArray<Web3ManagerSuiObject> = Object.values(
        localTokens
      ).reduce((acc, elem) => {
        if (coinsMap[elem.type]) return acc;

        return acc.concat([
          { ...elem, objects: [], totalBalance: BigNumber(0) },
        ]);
      }, [] as ReadonlyArray<Web3ManagerSuiObject>);

      return [baseTokens, recommendedTokens, walletTokens, addedTokens] as [
        ReadonlyArray<Web3ManagerSuiObject>,
        ReadonlyArray<Web3ManagerSuiObject>,
        ReadonlyArray<Web3ManagerSuiObject>,
        ReadonlyArray<Web3ManagerSuiObject>
      ];
    }, [coinsMap, coins.length]);

  const filteredTokens = useMemo(() => {
    const array =
      searchedToken && searchedToken.type && coinsMap[searchedToken.type]
        ? [coinsMap[searchedToken.type]]
        : [];

    const filteredTokensArray =
      tab === 'recommended'
        ? recommendedTokens.filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          )
        : [...walletTokens, ...addedTokens].filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          );

    return array.concat(filteredTokensArray);
  }, [
    debouncedSearch,
    searchedToken,
    tab,
    walletTokens,
    addedTokens,
    recommendedTokens,
  ]);

  useEffect(() => {
    if (
      !filteredTokens.length &&
      debouncedSearch &&
      isType(debouncedSearch) &&
      (!askedToken || askedToken.type !== debouncedSearch)
    ) {
      provider
        .getCoinMetadata(debouncedSearch)
        .then((metadata) => {
          setAskedToken({
            symbol: metadata.symbol,
            decimals: metadata.decimals,
            type: debouncedSearch,
            objects: [],
            totalBalance: BigNumber(0),
          });
          setLocalTokens(
            assoc(
              debouncedSearch,
              {
                symbol: metadata.symbol,
                decimals: metadata.decimals,
                type: debouncedSearch,
              },
              localTokens
            )
          );
        })
        .catch(() => {
          console.log('cacthed');
          const symbol = getSymbolByType(debouncedSearch);
          setAskedToken({
            symbol,
            decimals: 0,
            type: debouncedSearch,
            objects: [],
            totalBalance: BigNumber(0),
          });

          setLocalTokens(
            assoc(
              debouncedSearch,
              {
                symbol,
                decimals: 0,
                type: debouncedSearch,
              },
              localTokens
            )
          );
        });
    }
  }, [filteredTokens, debouncedSearch, localTokens, askedToken]);

  useEffect(() => {
    if (!debouncedSearch) setAskedToken(null);
  }, [debouncedSearch]);

  const handleRemoveFromLocal: RemoveLocalToken = (type) => () => {
    setLocalTokens(dissoc(type, localTokens));
    setAskedToken(null);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Box display="flex" textAlign="right" justifyContent="flex-end" mb="M">
          <Button
            p="NONE"
            width="2.5rem"
            height="2.5rem"
            variant="primary"
            onClick={toggleModal}
          >
            <TimesSVG
              width="1.4rem"
              strokeWidth={3}
              maxWidth="1.4rem"
              maxHeight="1.4rem"
            />
          </Button>
        </Box>
      </Box>
      <Box bg="foreground" p="L" borderRadius="M" maxWidth="27rem">
        {Input}
        {isSearching && <LineLoaderSVG width="100%" />}
        {debouncedSearch ? (
          <Box my="L" textAlign="center">
            {isSearching ? (
              <Typography variant="normal" color="text">
                {capitalize(t('common.load', { isLoading: 1 }))}
              </Typography>
            ) : filteredTokens.length ? (
              renderData(filteredTokens, handleSelectCurrency, currentToken)
            ) : askedToken ? (
              renderData(
                [askedToken],
                handleSelectCurrency,
                currentToken,
                true,
                true,
                addLocalToken
              )
            ) : (
              <Typography variant="normal" color="text">
                {capitalize(t('common.notFound'))}
              </Typography>
            )}
          </Box>
        ) : (
          <Box>
            <Box display="flex" my="L">
              {renderData(
                baseTokens,
                handleSelectCurrency,
                currentToken,
                false,
                true
              )}
            </Box>
            <Box display="flex" justifyContent="center">
              <Switch
                thin
                defaultValue={tab}
                options={[
                  {
                    value: 'recommended',
                    displayValue: t('common.recommended'),
                    onSelect: () => setTab('recommended'),
                  },
                  {
                    value: 'wallet',
                    displayValue: t('common.wallet'),
                    onSelect: () => setTab('wallet'),
                  },
                  {
                    value: 'added',
                    displayValue: t('common.addedByUser'),
                    onSelect: () => setTab('added'),
                  },
                ]}
              />
            </Box>
            {cond([
              [
                equals('recommended'),
                always(
                  <Box
                    mt="M"
                    display="grid"
                    overflowY="auto"
                    gridGap="0.3rem"
                    maxHeight="20rem"
                  >
                    {renderData(
                      recommendedTokens,
                      handleSelectCurrency,
                      currentToken
                    )}
                  </Box>
                ),
              ],
              [
                equals('wallet'),
                always(
                  <InfiniteScroll
                    mt="M"
                    hasMore={false}
                    display="grid"
                    gridGap="0.3rem"
                    maxHeight="20rem"
                    loader={<LineLoaderSVG />}
                    dataLength={walletTokens.length}
                    next={noop}
                  >
                    {renderData(
                      walletTokens,
                      handleSelectCurrency,
                      currentToken,
                      false,
                      false,
                      addLocalToken
                    )}
                  </InfiniteScroll>
                ),
              ],
              [
                T,
                always(
                  <InfiniteScroll
                    mt="M"
                    hasMore={false}
                    display="grid"
                    gridGap="0.3rem"
                    maxHeight="20rem"
                    loader={<LineLoaderSVG />}
                    dataLength={addedTokens.length}
                    next={noop}
                  >
                    {renderData(
                      addedTokens,
                      handleSelectCurrency,
                      currentToken,
                      false,
                      true,
                      addLocalToken,
                      handleRemoveFromLocal
                    )}
                  </InfiniteScroll>
                ),
              ],
            ])(tab)}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CurrencyDropdown;
