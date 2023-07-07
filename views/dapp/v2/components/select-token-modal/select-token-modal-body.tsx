import { Box } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { TOKENS_SVG_MAP_V2 } from '@/constants';
import { useWeb3 } from '@/hooks';
import { CoinData } from '@/interface';
import { FixedPointMath } from '@/lib';
import { getSymbolByType, isType } from '@/utils';
import LinearLoader from '@/views/dapp/dex-pool-details/components/remove-liquidity-card/linear-loader';

import FetchingToken from './fetching-token';
import NotFound from './not-found';
import {
  FavoriteTokensProps,
  ModalTokenBodyProps,
  SelectTokenModalBodyProps,
  TokenOrigin,
} from './select-token-modal.types';
import TokenModalItem from './token-modal-item';

const ModalTokenBody: FC<ModalTokenBodyProps> = ({
  tokens,
  currentTokenType,
  askedToken,
  tokenOrigin,
  onSelectToken,
  favoriteForm,
  isFavorite,
}) => {
  return tokens.length ? (
    <>
      {tokens.map(({ symbol, type, decimals, totalBalance }) => (
        <TokenModalItem
          key={v4()}
          isFavorite={isFavorite}
          type={type}
          symbol={symbol}
          favoriteForm={favoriteForm}
          selected={currentTokenType === type}
          recommended={!askedToken && tokenOrigin === TokenOrigin.Recommended}
          Icon={TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default}
          onClick={async () => onSelectToken({ symbol, decimals, type })}
          balance={FixedPointMath.toNumber(totalBalance, decimals).toString()}
        />
      ))}
    </>
  ) : (
    <NotFound />
  );
};

const FavoriteTokens: FC<FavoriteTokensProps> = ({
  currentTokenType,
  askedToken,
  tokenOrigin,
  onSelectToken,
  favoriteForm,
}) => {
  const tokenTypes = useWatch({
    control: favoriteForm.control,
    name: 'tokens',
  });

  const { coinsMap } = useWeb3();

  const tokens = tokenTypes.map(
    (type) =>
      coinsMap[type] ?? {
        type,
        symbol: getSymbolByType(type),
        totalBalance: BigNumber(0),
        objects: [],
        decimals: 0,
      }
  );

  return (
    <ModalTokenBody
      isFavorite
      tokens={tokens}
      tokenOrigin={tokenOrigin}
      favoriteForm={favoriteForm}
      onSelectToken={onSelectToken}
      currentTokenType={currentTokenType}
      askedToken={askedToken}
    />
  );
};

const SelectTokenModalBody: FC<SelectTokenModalBodyProps> = ({
  network,
  control,
  coinsMap,
  provider,
  tokenOrigin,
  walletTokens,
  favoriteForm,
  onSelectToken,
  currentTokenType,
  fetchingMetaData,
  recommendedTokens,
  searchTokenModalState,
}) => {
  const [loading, setLoading] = useState(false);
  const [selectingToken, setSelectingToken] = useState(false);
  const [askedToken, setAskedToken] = useState<Web3ManagerSuiObject | null>(
    null
  );
  const search = useWatch({ control, name: 'search' });

  const [debouncedSearch, { isPending }] = useDebounce(search, 800);

  const handleSelectToken = async (token: CoinData) => {
    try {
      setSelectingToken(true);
      await onSelectToken(token);
    } finally {
      setSelectingToken(false);
    }
  };

  const filteredTokens = useMemo(() => {
    const array =
      searchTokenModalState &&
      searchTokenModalState.type &&
      coinsMap[searchTokenModalState.type]
        ? [coinsMap[searchTokenModalState.type]]
        : [];

    const filteredTokensArray =
      tokenOrigin === TokenOrigin.Recommended
        ? recommendedTokens.filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          )
        : tokenOrigin === TokenOrigin.Wallet
        ? walletTokens.filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          )
        : favoriteForm
            .getValues('tokens')
            .map(
              (type) =>
                coinsMap[type] ?? {
                  type,
                  symbol: getSymbolByType(type),
                  totalBalance: BigNumber(0),
                  objects: [],
                  decimals: 0,
                }
            )
            .filter(
              ({ type, symbol }) =>
                symbol
                  .toLowerCase()
                  .startsWith(debouncedSearch.toLowerCase()) ||
                type == debouncedSearch
            );

    return array.concat(filteredTokensArray);
  }, [
    debouncedSearch,
    searchTokenModalState,
    tokenOrigin,
    walletTokens,
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
        .then((metadata) => {
          if (metadata) {
            setAskedToken({
              symbol: metadata.symbol,
              decimals: metadata.decimals,
              type: debouncedSearch,
              objects: [],
              totalBalance: BigNumber(0),
            });
          } else {
            askedToken && setAskedToken(null);
          }
        })
        .catch(() => askedToken && setAskedToken(null))
        .finally(() => setLoading(false));
    }
  }, [filteredTokens, debouncedSearch, search]);

  useEffect(() => {
    if ((!debouncedSearch && !isPending()) || !search) setAskedToken(null);
  }, [debouncedSearch]);

  if (loading) return <FetchingToken />;

  if (debouncedSearch && !askedToken) return <NotFound />;

  return (
    <>
      <Box position="absolute" width="100%" mt="-0.95rem">
        <LinearLoader loading={fetchingMetaData || selectingToken} />
      </Box>
      <Box
        p="2xl"
        gap="xl"
        flex="1"
        display="flex"
        overflowY="auto"
        flexDirection="column"
        bg="surface.containerLow"
      >
        {debouncedSearch &&
          askedToken &&
          [askedToken].map(({ symbol, type, decimals, totalBalance }) => (
            <TokenModalItem
              key={v4()}
              type={type}
              symbol={symbol}
              favoriteForm={favoriteForm}
              selected={currentTokenType === type}
              recommended={
                !askedToken && tokenOrigin === TokenOrigin.Recommended
              }
              Icon={TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default}
              onClick={async () =>
                handleSelectToken({ symbol, decimals, type })
              }
              balance={FixedPointMath.toNumber(
                totalBalance,
                decimals
              ).toString()}
            />
          ))}
        {!debouncedSearch &&
          !askedToken &&
          tokenOrigin === TokenOrigin.Recommended && (
            <ModalTokenBody
              tokens={recommendedTokens}
              askedToken={askedToken}
              onSelectToken={handleSelectToken}
              currentTokenType={currentTokenType}
              favoriteForm={favoriteForm}
              tokenOrigin={tokenOrigin}
            />
          )}
        {!debouncedSearch &&
          !askedToken &&
          tokenOrigin === TokenOrigin.Wallet && (
            <ModalTokenBody
              tokens={walletTokens}
              askedToken={askedToken}
              onSelectToken={handleSelectToken}
              currentTokenType={currentTokenType}
              favoriteForm={favoriteForm}
              tokenOrigin={tokenOrigin}
            />
          )}
        {!debouncedSearch &&
          !askedToken &&
          tokenOrigin === TokenOrigin.Favorites && (
            <FavoriteTokens
              askedToken={askedToken}
              onSelectToken={handleSelectToken}
              currentTokenType={currentTokenType}
              favoriteForm={favoriteForm}
              tokenOrigin={tokenOrigin}
              coinsMap={coinsMap}
            />
          )}
      </Box>
    </>
  );
};

export default SelectTokenModalBody;
