import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Switch } from '@/components';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { BASE_TOKENS_TYPES, COIN_DECIMALS, COIN_SYMBOL } from '@/constants';
import { Box, Button } from '@/elements';
import { useLocalStorage } from '@/hooks';
import { CoinData, LocalTokenMetadataRecord } from '@/interface';
import { TimesSVG } from '@/svg';

import CurrencyModalBody from './currency-modal-body';
import SearchToken from './search-token';
import {
  CurrencyDropdownProps,
  CurrencyModalTabKeys,
} from './select-currency.types';
import { renderData } from './select-currency.utils';

const CurrencyModal: FC<CurrencyDropdownProps> = ({
  coins,
  coinsMap,
  toggleModal,
  currentToken,
  onSelectCurrency,
  searchTokenModalState,
  provider,
  network,
}) => {
  const t = useTranslations();
  const [fetchingData, setFetchingData] = useState(false);
  const [tab, setTab] = useState<CurrencyModalTabKeys>('recommended');
  const [askedToken, setAskedToken] = useState<Web3ManagerSuiObject | null>(
    null
  );

  const { control, register, setValue } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const handleChangeTab = (key: CurrencyModalTabKeys) => () => {
    setTab(key);
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
        onSelectCurrency(storedToken);
        return;
      }

      if (args.decimals > -1) {
        setLocalTokensMetadata({
          ...localTokensMetadata,
          [args.type]: args,
        });
        onSelectCurrency(args);
        return;
      }

      setFetchingData(true);
      const { symbol, decimals } = await provider.getCoinMetadata({
        coinType: args.type,
      });

      const tokenMetaData = {
        symbol: symbol,
        type: args.type,
        decimals: decimals,
      };

      setLocalTokensMetadata({
        ...localTokensMetadata,
        [args.type]: tokenMetaData,
      });

      onSelectCurrency(tokenMetaData);
    } catch (error) {
      const decimals = args.decimals === -1 ? 0 : args.decimals;

      if (
        !storedToken &&
        coinsMap[args.type] &&
        (error as Error).message.startsWith('Error fetching CoinMetadata')
      )
        setLocalTokensMetadata({
          ...localTokensMetadata,
          [args.type]: {
            ...args,
            decimals,
          },
        });

      onSelectCurrency({
        ...args,
        decimals,
      });
    } finally {
      setFetchingData(false);
      toggleModal?.();
    }
  };

  const baseTokens = BASE_TOKENS_TYPES[network].map(
    (type) =>
      coinsMap[type] ?? {
        type,
        objects: [],
        totalBalance: BigNumber(0),
        symbol: COIN_SYMBOL[network][type],
        decimals: COIN_DECIMALS[network][type],
      }
  );

  const handleRemoveFromFavorite = (type: string) => {
    addFavorite(favoriteTokens.filter((x) => x !== type));
    askedToken && setAskedToken(null);
  };

  const setFavoriteTokens = (type: string) => {
    if (favoriteTokens.includes(type)) return;
    addFavorite(favoriteTokens.concat([type]));
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
        <SearchToken register={register} setValue={setValue} />
        <Box>
          <Box display="flex" my="L">
            {renderData({
              currentToken,
              noBalance: true,
              setFavoriteTokens,
              tokens: baseTokens,
              onSelectCurrency: handleSelectCurrency,
            })}
          </Box>
          <Box display="flex" justifyContent="center">
            <Switch
              thin
              defaultValue={tab}
              options={[
                {
                  value: 'recommended',
                  displayValue: t('common.recommended'),
                  onSelect: handleChangeTab('recommended'),
                },
                {
                  value: 'favorites',
                  displayValue: t('common.favorites'),
                  onSelect: handleChangeTab('favorites'),
                },
                {
                  value: 'wallet',
                  displayValue: t('common.wallet'),
                  onSelect: handleChangeTab('wallet'),
                },
              ]}
            />
          </Box>
        </Box>
        <CurrencyModalBody
          tab={tab}
          coins={coins}
          control={control}
          coinsMap={coinsMap}
          askedToken={askedToken}
          currentToken={currentToken}
          fetchingMetaData={fetchingData}
          favoriteTokens={favoriteTokens}
          setFavoriteTokens={setFavoriteTokens}
          handleSelectCurrency={handleSelectCurrency}
          searchTokenModalState={searchTokenModalState}
          handleRemoveFromFavorite={handleRemoveFromFavorite}
          provider={provider}
          network={network}
        />
      </Box>
    </>
  );
};

export default CurrencyModal;
