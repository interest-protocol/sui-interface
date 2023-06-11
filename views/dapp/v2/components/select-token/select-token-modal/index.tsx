import {
  Box,
  Button,
  Motion,
  TextField,
  Typography,
} from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Chip } from '@/components';
import { LeftArrowSVG, SearchSVG } from '@/components/svg/v2';
import {
  BASE_TOKENS_TYPES,
  COIN_DECIMALS,
  COIN_TYPE_TO_SYMBOL,
} from '@/constants';
import { useLocalStorage } from '@/hooks';
import { CoinData, LocalTokenMetadataRecord } from '@/interface';
import { TimesSVG } from '@/svg';

import {
  SearchTokenForm,
  SelectTokenModalProps,
  TokenOrigin,
} from '../select-token.types';
import SelectTokenBaseTokens from './select-token-modal-base';
import SelectTokenModalBody from './select-token-modal-body';

const SelectTokenModal: FC<SelectTokenModalProps> = ({
  network,
  coinsMap,
  provider,
  closeModal,
  onSelectToken,
  currentTokenType,
  searchTokenModalState,
  recommendedTokens,
  walletTokens,
  favoriteForm,
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

  const [localTokensMetadata, setLocalTokensMetadata] =
    useLocalStorage<LocalTokenMetadataRecord>(
      'sui-interest-tokens-metadata',
      {}
    );

  const handleSelectCurrency = async (args: CoinData) => {
    const storedToken = localTokensMetadata[args.type];

    try {
      if (storedToken) {
        await onSelectToken(storedToken);
        return;
      }

      if (args.decimals > -1) {
        setLocalTokensMetadata({
          ...localTokensMetadata,
          [args.type]: args,
        });
        await onSelectToken(args);
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

      await onSelectToken(tokenMetaData);
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

      await onSelectToken({
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

  return (
    <Motion
      layout
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
      transition={{ duration: 0.3 }}
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
          placeholder={t('swap.modal.preview.selectToken.search')}
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
      <Motion
        overflowY="auto"
        position="relative"
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
      >
        <SelectTokenModalBody
          control={control}
          network={network}
          provider={provider}
          coinsMap={coinsMap}
          tokenOrigin={tokenOrigin}
          fetchingMetaData={fetchingData}
          currentTokenType={currentTokenType}
          onSelectToken={handleSelectCurrency}
          searchTokenModalState={searchTokenModalState}
          recommendedTokens={recommendedTokens}
          favoriteForm={favoriteForm}
          walletTokens={walletTokens}
        />
      </Motion>
    </Motion>
  );
};

export default SelectTokenModal;
