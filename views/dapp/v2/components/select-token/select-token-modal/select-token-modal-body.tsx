import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { TOKENS_SVG_MAP_V2 } from '@/constants';
import { FixedPointMath } from '@/lib';
import { EmptyBoxSVG } from '@/svg';
import { isType } from '@/utils';
import LinearLoader from '@/views/dapp/dex-pool-details/components/remove-liquidity-card/linear-loader';
import TokenModalItem from '@/views/dapp/v2/components/select-token/select-token-modal/token-modal-item';

import { SelectTokenModalBodyProps, TokenOrigin } from '../select-token.types';

const SelectTokenModalBody: FC<SelectTokenModalBodyProps> = ({
  coins,
  network,
  control,
  coinsMap,
  provider,
  favorites,
  tokenOrigin,
  walletTokens,
  setFavorites,
  onSelectToken,
  favoriteTokens,
  currentTokenType,
  fetchingMetaData,
  recommendedTokens,
  favoriteTokensTypes,
  searchTokenModalState,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [askedToken, setAskedToken] = useState<Web3ManagerSuiObject | null>(
    null
  );
  const search = useWatch({ control, name: 'search' });

  const [debouncedSearch, { isPending }] = useDebounce(search, 800);

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
        : [...walletTokens, ...favorites].filter(
            ({ type, symbol }) =>
              symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
              type == debouncedSearch
          );

    return array.concat(filteredTokensArray);
  }, [
    debouncedSearch,
    searchTokenModalState,
    tokenOrigin,
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
  }, [filteredTokens, debouncedSearch, favoriteTokens, search]);

  const TOKENS_RECORD = {
    [TokenOrigin.Recommended]: recommendedTokens,
    [TokenOrigin.Favorites]: favoriteTokens,
    [TokenOrigin.Wallet]: coins,
  };

  const tokens = TOKENS_RECORD[tokenOrigin];

  if (!tokens.length)
    return (
      <Box
        p="4xl"
        gap="xl"
        flex="1"
        color="text"
        display="flex"
        overflowY="auto"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLow"
      >
        <EmptyBoxSVG maxHeight="4rem" maxWidth="4rem" width="100%" />
        <Typography variant="medium" textTransform="capitalize">
          {t('common.notFound')}
        </Typography>
      </Box>
    );

  return (
    <>
      <LinearLoader loading={loading || fetchingMetaData} />
      <Box
        p="2xl"
        gap="xl"
        flex="1"
        display="flex"
        overflowY="auto"
        flexDirection="column"
        bg="surface.containerLow"
      >
        {tokens.map(({ symbol, type, decimals, totalBalance }) => (
          <TokenModalItem
            key={v4()}
            type={type}
            symbol={symbol}
            setFavorites={setFavorites}
            favoriteTokens={favoriteTokensTypes}
            selected={currentTokenType === type}
            recommended={tokenOrigin === TokenOrigin.Recommended}
            Icon={TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default}
            onClick={async () => onSelectToken({ symbol, decimals, type })}
            balance={FixedPointMath.toNumber(totalBalance, decimals).toString()}
          />
        ))}
      </Box>
    </>
  );
};

export default SelectTokenModalBody;
