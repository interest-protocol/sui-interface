import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const SupplyMarketTableHeader: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      py="1rem"
      borderBottom="1px solid"
      borderColor="outline.outlineVariant"
      pl="1.125rem"
    >
      <Box px="l">
        <Typography
          variant="extraSmall"
          textTransform="capitalize"
          whiteSpace="nowrap"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t('Lend.assetAPY')}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          textTransform="capitalize"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t('Lend.supplied')}
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
          {t('Lend.collateral')}
        </Typography>
      </Box>
    </Box>
  );
};

export default SupplyMarketTableHeader;
