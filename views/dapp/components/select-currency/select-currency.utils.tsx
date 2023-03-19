import { ReactNode } from 'react';
import { v4 } from 'uuid';

import { TOKENS_SVG_MAP } from '@/constants';
import Box from '@/elements/box';
import Typography from '@/elements/typography';
import { FixedPointMath } from '@/sdk';
import { formatMoney } from '@/utils';

import {
  OnSelectCurrencyData,
  TokenModalMetadata,
} from './select-currency.types';

export const renderData = (
  tokens: ReadonlyArray<TokenModalMetadata>,
  onSelectCurrency: (data: OnSelectCurrencyData) => void,
  currentToken: string,
  noBalance = false
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
        {!noBalance && (
          <Typography variant="normal">
            {formatMoney(FixedPointMath.toNumber(totalBalance, decimals))}
          </Typography>
        )}
      </Box>
    );
  });
};
