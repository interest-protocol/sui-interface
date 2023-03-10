import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Dropdown, Typography } from '@/elements';
import { IDropdownData } from '@/elements/dropdown/dropdown.types';
import { ArrowSVG } from '@/svg';
import { capitalize } from '@/utils';

import { FaucetCurrencyDropdownProps, IToken } from '../faucet.types';

const renderData = (
  data: ReadonlyArray<IToken>,
  onSelectCurrency: (objectId: string) => void
): ReadonlyArray<IDropdownData> =>
  data.map(({ symbol, type, Icon }) => {
    const SVG = Icon;

    return {
      onSelect: () => onSelectCurrency(type),
      displayOption: symbol,
      displayTitle: (
        <Box
          px="L"
          display="flex"
          bg="background"
          borderRadius="M"
          alignItems="center"
          justifyContent="space-between"
          height="3rem"
        >
          <Box my="M" display="flex" alignItems="center">
            <Box as="span" display="inline-block" width="1rem">
              <SVG width="100%" maxHeight="1rem" maxWidth="1rem" />
            </Box>
            <Typography
              mx="M"
              as="span"
              variant="normal"
              hover={{ color: 'accent' }}
              active={{ color: 'accentActive' }}
            >
              {symbol}
            </Typography>
          </Box>
          <Box as="span" display="inline-block" width="0.5rem" color="text">
            <ArrowSVG
              width="100%"
              maxHeight="0.5rem"
              maxWidth="0.5rem"
              fill="currentColor"
            />
          </Box>
        </Box>
      ),
      value: symbol,
    };
  });

const FaucetTokensDropdown: FC<FaucetCurrencyDropdownProps> = ({
  tokens,
  defaultValue,
  onSelectCurrency,
}) => {
  const t = useTranslations();
  const SVG = tokens?.[0]?.Icon;

  return (
    <Dropdown
      mode="select"
      defaultValue={defaultValue}
      emptyMessage={capitalize(t('error.tokenNotFound'))}
      title={
        <Box
          px="L"
          display="flex"
          bg="background"
          borderRadius="M"
          alignItems="center"
          justifyContent="space-between"
          height="3rem"
        >
          <Box my="M" display="flex" alignItems="center">
            <Box as="span" display="inline-block" width="1rem" color="text">
              <SVG
                width="100%"
                maxHeight="1rem"
                maxWidth="1rem"
                fill="currentColor"
              />
            </Box>
            <Typography
              mx="M"
              as="span"
              variant="normal"
              hover={{ color: 'accent' }}
              active={{ color: 'accentActive' }}
              textTransform="capitalize"
            >
              {tokens?.[0]?.symbol}
            </Typography>
          </Box>

          <Box as="span" display="inline-block" width="0.5rem" color="text">
            <ArrowSVG
              width="100%"
              maxHeight="0.5rem"
              maxWidth="0.5rem"
              fill="currentColor"
            />
          </Box>
        </Box>
      }
      data={renderData(tokens, onSelectCurrency)}
    />
  );
};

export default FaucetTokensDropdown;
