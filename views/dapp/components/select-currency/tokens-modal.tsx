import { useTranslations } from 'next-intl';
import { FC, useMemo, useState } from 'react';
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
import { LineLoaderSVG, TimesSVG } from '@/svg';
import { capitalize, getSymbolByType, noop } from '@/utils';

import {
  CurrencyDropdownProps,
  OnSelectCurrency,
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
  const [isRecommended, setRecommended] = useState(true);
  const [debouncedSearch] = useDebounce(search, 800);

  const handleSelectCurrency: OnSelectCurrency = (args) => {
    onSelectCurrency(args);
    toggleModal?.();
  };

  const [baseTokens, recommendedTokens, otherTokens] = useMemo(() => {
    const baseTokens = BASE_TOKENS_TYPES[Network.DEVNET].reduce((acc, type) => {
      const coin = coinsMap[type];

      return coin ? acc.concat([coin]) : acc;
    }, [] as ReadonlyArray<Web3ManagerSuiObject>);

    const recommendedTokens = RECOMMENDED_TOKENS_TYPES[Network.DEVNET].reduce(
      (acc, type) => {
        const coin = coinsMap[type];

        return coin ? acc.concat([coin]) : acc;
      },
      [] as ReadonlyArray<Web3ManagerSuiObject>
    );

    const otherTokens = coins
      .filter(
        ({ type }) =>
          !BASE_TOKENS_TYPES[Network.DEVNET].includes(type) &&
          !RECOMMENDED_TOKENS_TYPES[Network.DEVNET].includes(type)
      )
      .map((token) => ({
        ...token,
        symbol: getSymbolByType(token.type) ?? token.symbol,
      }));

    return [baseTokens, recommendedTokens, otherTokens] as [
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

    const filteredTokensArray = isRecommended
      ? recommendedTokens.filter(
          ({ type, symbol }) =>
            symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
            type == debouncedSearch
        )
      : otherTokens.filter(
          ({ type, symbol }) =>
            symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
            type == debouncedSearch
        );

    return array.concat(filteredTokensArray);
  }, [
    debouncedSearch,
    searchedToken,
    isRecommended,
    otherTokens,
    recommendedTokens,
  ]);

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
            ) : (
              <Typography variant="normal" color="text">
                {capitalize(t('common.notFound'))}
              </Typography>
            )}
          </Box>
        ) : (
          <Box>
            <Box display="flex" my="L">
              {renderData(baseTokens, handleSelectCurrency, currentToken, true)}
            </Box>
            <Box display="flex" justifyContent="center">
              <Switch
                defaultValue={isRecommended ? 'recommended' : 'added'}
                options={[
                  {
                    value: 'recommended',
                    displayValue: t('common.recommended'),
                    onSelect: () => setRecommended(true),
                  },
                  {
                    value: 'added',
                    displayValue: t('common.addedByUser'),
                    onSelect: () => setRecommended(false),
                  },
                ]}
              />
            </Box>
            {isRecommended ? (
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
            ) : (
              <InfiniteScroll
                mt="M"
                hasMore={false}
                display="grid"
                gridGap="0.3rem"
                maxHeight="20rem"
                loader={<LineLoaderSVG />}
                dataLength={otherTokens.length}
                next={noop}
              >
                {renderData(
                  otherTokens,
                  handleSelectCurrency,
                  currentToken,
                  false,
                  addLocalToken
                )}
              </InfiniteScroll>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CurrencyDropdown;
