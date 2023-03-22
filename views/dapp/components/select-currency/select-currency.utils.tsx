import { ReactNode } from 'react';
import { v4 } from 'uuid';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { TOKENS_SVG_MAP } from '@/constants';
import Box from '@/elements/box';
import Typography from '@/elements/typography';
import { CoinData } from '@/interface';
import { FixedPointMath } from '@/sdk';
import { asyncNoop, formatMoney, provider } from '@/utils';

import { OnSelectCurrencyData } from './select-currency.types';

export const renderData = (
  tokens: ReadonlyArray<Web3ManagerSuiObject>,
  onSelectCurrency: (data: OnSelectCurrencyData) => void,
  currentToken: string,
  noBalance = false,
  addLocalToken: (x: CoinData) => Promise<void> = asyncNoop
): ReadonlyArray<ReactNode> => {
  const DefaultTokenSVG = TOKENS_SVG_MAP.default;

  return tokens.map(({ type, symbol, decimals, totalBalance }) => {
    const SVG = TOKENS_SVG_MAP[type] ?? DefaultTokenSVG;

    const isDisabled = type == currentToken;
    const handleSelectCurrency = () => {
      if (isDisabled) return;

      if (decimals === -1) {
        return provider
          .getCoinMetadata(type)
          .then((metadata) => {
            addLocalToken({
              type,
              symbol: metadata.symbol,
              decimals: metadata.decimals,
            }).then(() =>
              onSelectCurrency({
                type,
                symbol: metadata.symbol,
                decimals: metadata.decimals,
              })
            );
          })
          .catch(() =>
            onSelectCurrency({
              type,
              symbol: symbol,
              decimals: 0,
            })
          );
      }

      onSelectCurrency({ type, symbol, decimals });
    };

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
        nHover={{
          borderColor: isDisabled ? 'transparent' : 'accent',
        }}
      >
        <Box my="M" display="flex" alignItems="center">
          <Box as="span" display="inline-flex" width="1rem" alignItems="center">
            <SVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
          <Typography mx="M" as="span" variant="normal">
            {symbol}
          </Typography>
        </Box>
        {!noBalance && (
          <Typography variant="normal">
            {decimals !== -1
              ? formatMoney(FixedPointMath.toNumber(totalBalance, decimals))
              : 'N/A'}
          </Typography>
        )}
      </Box>
    );
  });
};
