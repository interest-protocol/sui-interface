import {
  Box,
  Button,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { DotsSVG } from '@/components/svg/v2';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { COIN_TYPE_TO_SYMBOL, TOKENS_SVG_MAP_V2 } from '@/constants';
import {
  BASE_TOKENS_TYPES,
  COIN_DECIMALS,
  RECOMMENDED_TOKENS_TYPES,
} from '@/constants';
import { useLocalStorage } from '@/hooks';
import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { CoinData } from '@/interface';

import { FavoriteTokensForm, SelectTokenProps } from './select-token.types';
import SelectTokenModal from './select-token-modal';
const SelectToken: FC<SelectTokenProps> = ({
  onSelectToken,
  currentTokenType,
  searchTokenModalState,
  currentTokenSymbol,
}) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const { dark } = useTheme() as Theme;
  const { coinsMap, coins } = useWeb3();
  const { setModal, handleClose } = useModal();
  const [favoriteTokens, addFavorite] = useLocalStorage<ReadonlyArray<string>>(
    'sui-interest-favorite-tokens',
    []
  );

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
  const favoritesForm = useForm<FavoriteTokensForm>({
    defaultValues: { tokens: [] },
  });

  useEffect(() => {
    if (!favoritesForm.getValues('tokens')?.length && favoriteTokens.length)
      favoritesForm.setValue('tokens', favoriteTokens);
  }, [favoriteTokens, favoritesForm]);

  const handleOnSelectToken = async (data: CoinData) => {
    await onSelectToken(data);
    addFavorite(favoritesForm.getValues('tokens'));
  };

  const openModal = () =>
    setModal(
      <Motion
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        <SelectTokenModal
          network={network}
          provider={provider}
          coinsMap={coinsMap}
          closeModal={handleClose}
          onSelectToken={handleOnSelectToken}
          currentTokenType={currentTokenType}
          searchTokenModalState={searchTokenModalState}
          walletTokens={walletTokens}
          recommendedTokens={recommendedTokens}
          favoriteForm={favoritesForm}
        />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
        onClose: handleClose,
        hasCloseButton: true,
      }
    );

  if (!currentTokenType)
    return (
      <Button
        size="small"
        variant="filled"
        whiteSpace="nowrap"
        onClick={openModal}
        bg="surface.container"
        color={dark ? 'white' : 'black'}
        SuffixIcon={
          <Box as="span" display="inline-block" ml="m">
            <DotsSVG
              maxWidth="1rem"
              maxHeight="1rem"
              height="100%"
              width="100%"
              filled
            />
          </Box>
        }
      >
        <Typography variant="medium" minWidth="6rem">
          {t('swap.form.selectToken')}
        </Typography>
      </Button>
    );

  const Icon =
    TOKENS_SVG_MAP_V2[currentTokenType || ''] ?? TOKENS_SVG_MAP_V2.default;

  const symbol =
    currentTokenSymbol ??
    (COIN_TYPE_TO_SYMBOL[network][currentTokenType || ''] || '???');

  return (
    <Button
      size="small"
      variant="filled"
      whiteSpace="nowrap"
      onClick={openModal}
      bg="surface.container"
      color={dark ? 'white' : 'black'}
      SuffixIcon={
        <Box as="span" display="inline-block" ml="m">
          <DotsSVG
            maxWidth="1rem"
            maxHeight="1rem"
            height="100%"
            width="100%"
            filled
          />
        </Box>
      }
      PrefixIcon={
        <Box as="span" display="inline-block">
          <Icon maxWidth="2rem" maxHeight="2rem" height="100%" width="100%" />
        </Box>
      }
    >
      <Typography variant="medium" minWidth="6rem">
        {symbol}
      </Typography>
    </Button>
  );
};

export default SelectToken;
