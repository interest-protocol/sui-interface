import { useTheme } from '@emotion/react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import { useModal } from '@/hooks/use-modal';
import { ArrowSVG } from '@/svg';

import SearchToken from './search-token';
import { SelectCurrencyProps } from './select-currency.types';
import TokensModal from './tokens-modal';

const SelectCurrency: FC<SelectCurrencyProps> = ({
  type,
  tokens,
  symbol,
  disabled,
  fromRight,
  currentToken,
  onSelectCurrency,
  searchTokenModalState,
}) => {
  const { setModal, handleClose } = useModal();
  const [loading, setIsLoading] = useState(false);
  const { dark } = useTheme() as { dark: boolean };
  const SVG = TOKENS_SVG_MAP[type] ?? TOKENS_SVG_MAP.default;

  const { control, register } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const openModal = () =>
    setModal(
      <TokensModal
        tokens={tokens}
        control={control}
        fromRight={fromRight}
        isSearching={loading}
        toggleModal={handleClose}
        currentToken={currentToken}
        onSelectCurrency={onSelectCurrency}
        setIsSearching={setIsLoading}
        searchTokenModalState={searchTokenModalState}
        Input={<SearchToken isSearching={loading} register={register} />}
      />
    );

  return (
    <Box
      px="M"
      py="S"
      display="flex"
      borderRadius="2.5rem"
      cursor="pointer"
      alignItems="center"
      bg="accentActive"
      nHover={{ bg: 'accent' }}
      justifyContent="space-between"
      transition="background-color 1s"
      onClick={disabled ? undefined : openModal}
      filter={disabled ? 'grayscale(1)' : 'unset'}
    >
      <Box
        my="M"
        display="flex"
        alignItems="center"
        color={dark ? 'text' : 'textInverted'}
      >
        <Box as="span" minWidth="1.3rem" display="flex" mr="M">
          <SVG
            width="100%"
            maxHeight="1.3rem"
            maxWidth="1.3rem"
            fill="currentColor"
          />
        </Box>
        <Typography
          mr="M"
          as="span"
          variant="normal"
          display={['none', 'block']}
          nActive={{ color: 'accentActive' }}
        >
          {symbol.length > 4
            ? symbol.toUpperCase().slice(0, 4)
            : symbol.toUpperCase()}
        </Typography>
      </Box>
      <Box as="span" display="inline-block" width="0.5rem">
        <ArrowSVG width="100%" maxHeight="0.5rem" maxWidth="0.5rem" />
      </Box>
    </Box>
  );
};

export default SelectCurrency;
