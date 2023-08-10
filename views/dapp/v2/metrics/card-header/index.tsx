import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TTranslatedMessage } from '@/interface';

import { TRANSLATION_KEYS } from './card-header.data';
import { CardHeaderProps } from './card-header.types';

const CardHeader: FC<CardHeaderProps> = ({
  title,
  filters,
  activeFilter,
  setFilter,
}) => {
  const t = useTranslations();

  return (
    <Box
      p="l"
      display="flex"
      alignItems="center"
      textTransform="capitalize"
      borderBottom=".0313rem solid"
      justifyContent="space-between"
      borderColor="outline.outlineVariant"
    >
      <Typography variant="large">{t(title as TTranslatedMessage)}</Typography>
      <Box display="flex" gap=".875rem">
        {filters?.map((filter) => (
          <Typography
            key={v4()}
            cursor="pointer"
            color="onSurface"
            variant="extraSmall"
            onClick={() => setFilter?.(filter)}
            opacity={filter === activeFilter ? 1 : 0.25}
            textDecoration={filter === activeFilter ? 'underline' : 'unset'}
          >
            {t(`metrics.cards.${TRANSLATION_KEYS[filter]}`)}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CardHeader;
