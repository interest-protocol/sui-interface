import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Chip } from '@/components';
import { LeftArrowSVG, SearchSVG } from '@/components/svg/v2';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  BASE_TOKENS_TYPES,
  COIN_DECIMALS,
  COIN_TYPE_TO_SYMBOL,
  RECOMMENDED_TOKENS_TYPES,
} from '@/constants';
import { useLocalStorage } from '@/hooks';
import { CoinData, LocalTokenMetadataRecord } from '@/interface';
import { TimesSVG } from '@/svg';
import { getSymbolByType } from '@/utils';

import {
  SearchTokenForm,
  SelectTokenModalProps,
  TokenOrigin,
} from '../select-token.types';
import SelectTokenBaseTokens from './select-token-modal-base';
import SelectTokenModalBody from './select-token-modal-body';

const SelectTokenModal: FC<SelectTokenModalProps> = ({
  coins,
  network,
  coinsMap,
  provider,
  closeModal,
  onSelectToken,
  currentTokenType,
  searchTokenModalState,
}) => {
  const t = useTranslations();

  const [tokenOrigin, setTokenOrigin] = useState<TokenOrigin>(
    TokenOrigin.Recommended
  );
  const [fetchingData, setFetchingData] = useState(false);

  const { control, register, setValue } = useForm<SearchTokenForm>({
    defaultValues: {
      search: '',
    },
  });

  const handleChangeTab = (origin: TokenOrigin) => {
    setTokenOrigin(origin);
    setValue('search', '');
  };

  const [favoriteTokens, addFavorite] = useLocalStorage<ReadonlyArray<string>>(
    'sui-interest-favorite-tokens',
    []
  );

  const [localTokensMetadata, setLocalTokensMetadata] =
    useLocalStorage<LocalTokenMetadataRecord>(
      'sui-interest-tokens-metadata',
      {}
    );

  const handleSelectCurrency = async (args: CoinData) => {
    const storedToken = localTokensMetadata[args.type];

    try {
      if (storedToken) {
        onSelectToken(storedToken);
        return;
      }

      if (args.decimals > -1) {
        setLocalTokensMetadata({
          ...localTokensMetadata,
          [args.type]: args,
        });
        onSelectToken(args);
        return;
      }

      setFetchingData(true);
      const metadata = await provider.getCoinMetadata({
        coinType: args.type,
      });

      if (!metadata) throw new Error();

      const { symbol, decimals } = metadata;

      const tokenMetaData = {
        symbol: symbol,
        type: args.type,
        decimals: decimals,
      };

      setLocalTokensMetadata({
        ...localTokensMetadata,
        [args.type]: tokenMetaData,
      });

      onSelectToken(tokenMetaData);
    } catch (error) {
      const decimals = args.decimals === -1 ? 0 : args.decimals;

      if (!storedToken && coinsMap[args.type])
        setLocalTokensMetadata({
          ...localTokensMetadata,
          [args.type]: {
            ...args,
            decimals,
          },
        });

      onSelectToken({
        ...args,
        decimals,
      });
    } finally {
      setFetchingData(false);
      closeModal();
    }
  };

  const baseTokens = BASE_TOKENS_TYPES[network].map(
    (type) =>
      coinsMap[type] ?? {
        type,
        objects: [],
        totalBalance: BigNumber(0),
        symbol: COIN_TYPE_TO_SYMBOL[network][type],
        decimals: COIN_DECIMALS[network][type],
      }
  );

  const [recommendedTokens, walletTokens, favorites] = useMemo(() => {
    const recommendedTokens: ReadonlyArray<Web3ManagerSuiObject> =
      RECOMMENDED_TOKENS_TYPES[network].map(
        (type) =>
          coinsMap[type] ?? {
            type,
            symbol: COIN_TYPE_TO_SYMBOL[network][type],
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

  return (
    <Box
      width="100%"
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
    >
      <Box
        py="m"
        px="xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button variant="icon" onClick={closeModal}>
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Typography variant="medium" color="text">
          {t('swap.modal.preview.selectToken.title')}
        </Typography>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box m="xl">
        <TextField
          {...register('search')}
          fontSize="medium"
          placeholder="Search Token"
          PrefixIcon={
            <SearchSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
          }
        />
      </Box>
      <SelectTokenBaseTokens
        tokens={baseTokens}
        currentTokenType={currentTokenType}
        onSelectToken={handleSelectCurrency}
      />
      <Box px="l" py="l" display="flex" gap="s" flexWrap="wrap">
        <Chip
          isActive={tokenOrigin === TokenOrigin.Recommended}
          onClick={() => handleChangeTab(TokenOrigin.Recommended)}
          text={t('swap.modal.preview.selectToken.recommended')}
        />
        <Chip
          isActive={tokenOrigin === TokenOrigin.Favorites}
          onClick={() => handleChangeTab(TokenOrigin.Favorites)}
          text={t('swap.modal.preview.selectToken.favorite')}
        />
        <Chip
          isActive={tokenOrigin === TokenOrigin.Wallet}
          onClick={() => handleChangeTab(TokenOrigin.Wallet)}
          text={t('swap.modal.preview.selectToken.wallet')}
        />
      </Box>
      <SelectTokenModalBody
        coins={coins}
        control={control}
        network={network}
        provider={provider}
        coinsMap={coinsMap}
        favorites={favorites}
        tokenOrigin={tokenOrigin}
        setFavorites={addFavorite}
        favoriteTokens={favorites}
        walletTokens={walletTokens}
        fetchingMetaData={fetchingData}
        currentTokenType={currentTokenType}
        onSelectToken={handleSelectCurrency}
        favoriteTokensTypes={favoriteTokens}
        recommendedTokens={recommendedTokens}
        searchTokenModalState={searchTokenModalState}
      />
    </Box>
  );
};

export default SelectTokenModal;
