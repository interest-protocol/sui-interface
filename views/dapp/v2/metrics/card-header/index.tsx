import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';

import { CardHeaderProps } from './card-header.types';

const CardHeader: FC<CardHeaderProps> = ({
  title,
  hasAllTime,
  hasDaily,
  hasFourteenDays,
  hasOneMonth,
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
        <Typography
          color="onSurface"
          variant="extraSmall"
          textDecoration="underline"
        >
          {hasAllTime && t('metrics.cards.allTime')}
        </Typography>
        <Typography variant="extraSmall" opacity={0.25} color="onSurface">
          {hasOneMonth && t('metrics.cards.oneMonth')}
        </Typography>
        <Typography variant="extraSmall" opacity={0.25} color="onSurface">
          {hasFourteenDays && t('metrics.cards.fourTeenDays')}
        </Typography>
        <Typography variant="extraSmall" opacity={0.25} color="onSurface">
          {hasDaily && t('metrics.cards.daily')}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardHeader;
