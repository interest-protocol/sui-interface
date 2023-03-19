import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { Switch } from '@/components';
import { COIN_TYPE, DEX_TOKENS_DATA, Network } from '@/constants';
import { Box, Button, InfiniteScroll, Typography } from '@/elements';
import { LineLoaderSVG, TimesSVG } from '@/svg';
import { capitalize } from '@/utils';

import {
  CurrencyDropdownProps,
  OnSelectCurrency,
  TokenModalMetadata,
} from './select-currency.types';
import { renderData } from './select-currency.utils';

const BASE_TOKENS_TYPES = [
  COIN_TYPE[Network.DEVNET].ETH,
  COIN_TYPE[Network.DEVNET].USDC,
  COIN_TYPE[Network.DEVNET].SUI,
];

const CurrencyDropdown: FC<CurrencyDropdownProps> = ({
  Input,
  tokens,
  control,
  isSearching,
  toggleModal,
  currentToken,
  onSelectCurrency,
  searchTokenModalState,
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

  const [allTokens, baseTokens] = useMemo(
    () =>
      DEX_TOKENS_DATA.reduce(
        (acc, item) => {
          if (BASE_TOKENS_TYPES.includes(item.type))
            return [
              acc[0],
              [
                ...acc[1],
                {
                  ...item,
                  totalBalance: tokens[item.type]?.totalBalance ?? BigNumber(0),
                },
              ],
            ];

          return [
            [
              ...acc[0],
              {
                ...item,
                totalBalance: tokens[item.type]?.totalBalance ?? BigNumber(0),
              },
            ],
            acc[1],
          ];
        },
        [[], []] as [
          ReadonlyArray<TokenModalMetadata>,
          ReadonlyArray<TokenModalMetadata>
        ]
      ),
    [tokens]
  );

  const filteredTokens = useMemo(
    () => [
      ...(searchedToken ? [searchedToken] : []),
      ...(allTokens.filter(
        ({ type, symbol }) =>
          symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
          type == debouncedSearch
      ) as ReadonlyArray<TokenModalMetadata>),
    ],
    [debouncedSearch, searchedToken]
  );

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
                defaultValue={isRecommended ? 'internal' : 'external'}
                options={[
                  { value: 'internal', onSelect: () => setRecommended(true) },
                  { value: 'external', onSelect: () => setRecommended(false) },
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
                {renderData(allTokens, handleSelectCurrency, currentToken)}
              </Box>
            ) : (
              // TODO: Redo the logic
              <InfiniteScroll
                mt="M"
                display="grid"
                gridGap="0.3rem"
                maxHeight="10rem"
                hasMore={true}
                loader={<LineLoaderSVG />}
                dataLength={allTokens.length * 4}
                next={() => {
                  console.log('>> next');
                }}
              >
                {renderData(allTokens, handleSelectCurrency, currentToken)}
              </InfiniteScroll>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CurrencyDropdown;
