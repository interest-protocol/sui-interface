import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TTranslatedMessage } from '@/interface';

const MarketTableHeader: FC<{ headers: ReadonlyArray<TTranslatedMessage> }> = ({
  headers,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      py="1rem"
      pl="1.125rem"
      display="grid"
      borderBottom="1px solid"
      gridTemplateColumns={`repeat(${headers.length}, 1fr)`}
      borderColor="outline.outlineVariant"
    >
      {headers.map((name, index) => (
        <Box px="l" key={v4()}>
          <Typography
            whiteSpace="nowrap"
            variant="extraSmall"
            textTransform="capitalize"
            color={dark ? '#77767A' : '#47464A'}
            textAlign={
              !index
                ? 'left'
                : index === headers.length - 1
                ? 'right'
                : 'center'
            }
          >
            {t(name)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MarketTableHeader;
