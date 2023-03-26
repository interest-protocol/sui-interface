import { useTranslations } from 'next-intl';
import { FC, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Switch } from '@/components';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { BASE_TOKENS_TYPES, Network } from '@/constants';
import { Box, Button } from '@/elements';
import { useLocalStorage } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';
import { TimesSVG } from '@/svg';

import CurrencyModalBody from './currency-modal-body';
import SearchToken from './search-token';
import {
  CurrencyDropdownProps,
  CurrencyModalTabKeys,
  OnSelectCurrency,
} from './select-currency.types';
import { renderData } from './select-currency.utils';

const CurrencyModal: FC<CurrencyDropdownProps> = ({
  coins,
  coinsMap,
  toggleModal,
  currentToken,
  onSelectCurrency,
  searchTokenModalState,
}) => {
  const t = useTranslations();
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

  const handleSelectCurrency: OnSelectCurrency = (args) => {
    onSelectCurrency(args);
    const isSaved = localTokensMetadata[args.type];

    if (!isSaved) {
      setLocalTokensMetadata({
        ...localTokensMetadata,
        [args.type]: {
          symbol: args.symbol,
          type: args.type,
          decimals: args.decimals,
        },
      });
    }
    toggleModal?.();
  };

  const baseTokens = useMemo(
    () =>
      BASE_TOKENS_TYPES[Network.DEVNET].reduce((acc, type) => {
        const coin = coinsMap[type];

        return coin ? acc.concat([coin]) : acc;
      }, [] as ReadonlyArray<Web3ManagerSuiObject>),
    []
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
              tokens: baseTokens,
              onSelectCurrency: handleSelectCurrency,
              currentToken,
              noBalance: true,
              setFavoriteTokens,
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
          favoriteTokens={favoriteTokens}
          setFavoriteTokens={setFavoriteTokens}
          handleSelectCurrency={handleSelectCurrency}
          searchTokenModalState={searchTokenModalState}
          handleRemoveFromFavorite={handleRemoveFromFavorite}
        />
      </Box>
    </>
  );
};

export default CurrencyModal;
