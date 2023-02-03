import { useTranslations } from 'next-intl';
import { FC, ReactNode, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import { DEX_TOKENS_DATA, TOKENS_SVG_MAP } from '@/constants';
import { Box, Button, Modal, Typography } from '@/elements';
import { FixedPointMath } from '@/sdk';
import { LineLoaderSVG, TimesSVG } from '@/svg';
import { capitalize, formatMoney } from '@/utils';

import {
  SwapCurrencyDropdownProps,
  SwapTokenModalMetadata,
} from '../../../dex.types';
import { OnSelectCurrencyData } from '../../../swap/swap.types';

const renderData = (
  tokens: ReadonlyArray<SwapTokenModalMetadata>,
  onSelectCurrency: (data: OnSelectCurrencyData) => void,
  currentToken: string
): ReadonlyArray<ReactNode> => {
  const DefaultTokenSVG = TOKENS_SVG_MAP.default;

  return tokens.map(({ type, symbol, decimals, totalBalance }) => {
    const SVG = TOKENS_SVG_MAP[type] ?? DefaultTokenSVG;

    const isDisabled = type == currentToken;
    const handleSelectCurrency = () =>
      !isDisabled && onSelectCurrency({ type, symbol, decimals });

    return (
      <Box
        m="XS"
        px="M"
        py="S"
        key={v4()}
        color="text"
        display="flex"
        border="1px solid"
        alignItems="center"
        borderRadius="2.5rem"
        borderColor="transparent"
        justifyContent="space-between"
        onClick={handleSelectCurrency}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        bg={isDisabled ? 'textSoft' : 'bottomBackground'}
        hover={{
          borderColor: isDisabled ? 'transparent' : 'accent',
        }}
      >
        <Box my="M" display="flex" alignItems="center">
          <Box as="span" display="inline-flex" width="1rem" alignItems="center">
            <SVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
          <Typography mx="M" as="span" variant="normal">
            {symbol?.toUpperCase()}
          </Typography>
        </Box>
        <Typography variant="normal">
          {formatMoney(FixedPointMath.toNumber(totalBalance, decimals))}
        </Typography>
      </Box>
    );
  });
};

const SwapCurrencyDropdown: FC<SwapCurrencyDropdownProps> = ({
  Input,
  tokens,
  control,
  isSearching,
  toggleModal,
  isModalOpen,
  currentToken,
  onSelectCurrency,
}) => {
  const t = useTranslations();
  const search = useWatch({ control, name: 'search' });
  const [searchedToken] = useState<null | SwapTokenModalMetadata>(null);

  const [debouncedSearch] = useDebounce(search, 800);

  const allTokens: ReadonlyArray<SwapTokenModalMetadata> = useMemo(
    () =>
      DEX_TOKENS_DATA.map((item) => ({
        ...item,
        totalBalance:
          tokens[item.type]?.totalBalance ?? FixedPointMath.toBigNumber(0),
      })),
    [tokens]
  );

  const filteredTokens = useMemo(
    () => [
      ...(searchedToken ? [searchedToken] : []),
      ...(allTokens.filter(
        ({ type, symbol }) =>
          symbol.toLowerCase().startsWith(debouncedSearch.toLowerCase()) ||
          type == debouncedSearch
      ) as ReadonlyArray<SwapTokenModalMetadata>),
    ],
    [debouncedSearch, searchedToken]
  );

  return (
    <Modal
      modalProps={{
        isOpen: isModalOpen,
        shouldCloseOnEsc: true,
        onRequestClose: toggleModal,
      }}
      background="#0004"
    >
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
              renderData(filteredTokens, onSelectCurrency, currentToken)
            ) : (
              <Typography variant="normal" color="text">
                {capitalize(t('common.notFound'))}
              </Typography>
            )}
          </Box>
        ) : (
          <Box
            mt="M"
            display="grid"
            overflowY="auto"
            gridGap="0.3rem"
            maxHeight="20rem"
          >
            {renderData(allTokens, onSelectCurrency, currentToken)}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default SwapCurrencyDropdown;
