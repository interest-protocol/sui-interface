import { useTheme } from '@emotion/react';
import { FC } from 'react';

import { TOKENS_SVG_MAP } from '@/constants';
import { Theme } from '@/design-system';
import { Box, Typography } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { useModal } from '@/hooks/use-modal';
import { ArrowSVG } from '@/svg';

import CurrencyModal from './currency-modal';
import { SelectCurrencyProps } from './select-currency.types';

const SelectCurrency: FC<SelectCurrencyProps> = ({
  type,
  symbol,
  disabled,
  fromRight,
  currentToken,
  onSelectCurrency,
  searchTokenModalState,
}) => {
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const { coinsMap, coins } = useWeb3();
  const SVG = TOKENS_SVG_MAP[type] ?? TOKENS_SVG_MAP.default;
  const { network } = useNetwork();
  const { provider } = useProvider();

  const openModal = () =>
    setModal(
      <CurrencyModal
        coins={coins}
        coinsMap={coinsMap}
        fromRight={fromRight}
        toggleModal={handleClose}
        currentToken={currentToken}
        onSelectCurrency={onSelectCurrency}
        searchTokenModalState={searchTokenModalState}
        network={network}
        provider={provider}
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
          display="block"
          nActive={{ color: 'accentActive' }}
        >
          {symbol}
        </Typography>
      </Box>
      <Box as="span" display="inline-block" width="0.5rem">
        <ArrowSVG width="100%" maxHeight="0.5rem" maxWidth="0.5rem" />
      </Box>
    </Box>
  );
};

export default SelectCurrency;
