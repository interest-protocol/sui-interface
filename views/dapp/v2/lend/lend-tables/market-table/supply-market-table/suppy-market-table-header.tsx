import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const SupplyMarketTableHeader: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      py="1rem"
      pl="1.125rem"
      display="grid"
      borderBottom="1px solid"
      gridTemplateColumns="repeat(4, 1fr)"
      borderColor="outline.outlineVariant"
    >
      <Box px="l">
        <Typography
          variant="extraSmall"
          textTransform="capitalize"
          whiteSpace="nowrap"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t('lend.assetAPY')}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          textTransform="capitalize"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t('lend.supplied')}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          textTransform="capitalize"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t('common.v2.wallet.name')}
        </Typography>
      </Box>
      <Box paddingRight="l">
        <Typography
          variant="extraSmall"
          textTransform="capitalize"
          textAlign="right"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t('lend.collateral')}
        </Typography>
      </Box>
    </Box>
  );
};

export default SupplyMarketTableHeader;
