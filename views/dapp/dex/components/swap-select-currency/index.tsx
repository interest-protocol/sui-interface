import { useTheme } from '@emotion/react';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import { ArrowSVG } from '@/svg';

import { SwapSelectCurrencyProps } from '../../dex.types';
import SwapSearchToken from './swap-search-token';
import SwapTokensModal from './swap-tokens-modal';

const SwapSelectCurrency: FC<SwapSelectCurrencyProps> = ({
  type,
  tokens,
  symbol,
  disabled,
  fromRight,
  isModalOpen,
  currentToken,
  setIsModalOpen,
  onSelectCurrency,
}) => {
  const { dark } = useTheme() as { dark: boolean };
  const [isSearching, setIsSearching] = useState(false);
  const { control, register } = useForm({
    defaultValues: {
      search: '',
    },
    mode: 'onBlur',
  });

  const toggleOpenModal = () => setIsModalOpen(not);

  const SVG = TOKENS_SVG_MAP[type] ?? TOKENS_SVG_MAP.default;

  return (
    <>
      <Box
        px="M"
        py="S"
        display="flex"
        borderRadius="2.5rem"
        cursor="pointer"
        alignItems="center"
        bg="accentActive"
        transition="background-color 1s"
        hover={{ bg: 'accent' }}
        justifyContent="space-between"
        onClick={disabled ? undefined : toggleOpenModal}
        filter={disabled ? 'grayscale(1)' : 'unset'}
      >
        <Box
          my="M"
          display="flex"
          alignItems="center"
          color={dark ? 'text' : 'textInverted'}
        >
          <Box as="span" minWidth="1.3rem" display="inline-block" mr="M">
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
            active={{ color: 'accentActive' }}
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
      {isModalOpen && (
        <SwapTokensModal
          onSelectCurrency={onSelectCurrency}
          currentToken={currentToken}
          fromRight={fromRight}
          control={control}
          tokens={tokens}
          isSearching={isSearching}
          isModalOpen={isModalOpen}
          toggleModal={toggleOpenModal}
          setIsSearching={setIsSearching}
          Input={
            <SwapSearchToken register={register} isSearching={isSearching} />
          }
        />
      )}
    </>
  );
};

export default SwapSelectCurrency;
