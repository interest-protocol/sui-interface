import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import {
  BoxDownSVG,
  BoxUpSVG,
  PercentageSVG,
  TrendDownSVG,
  TrendUpSVG,
} from '@/svg';

import { CardLendProps } from '../lend.types';

const CardTop: FC<Omit<CardLendProps, 'symbol' | 'amount'>> = ({
  icon,
  description,
  isTrendUp,
  trendAmount,
}) => {
  const t = useTranslations();
  const getTopIcon = (
    icon: 'percentage' | 'box-up' | 'box-down' | 'special'
  ) => {
    switch (icon) {
      case 'percentage':
        return (
          <PercentageSVG
            maxHeight="0.703rem"
            maxWidth="0.703rem"
            width="100%"
            height="100%"
          />
        );
      case 'box-up':
        return (
          <BoxUpSVG
            maxHeight="0.703rem"
            maxWidth="0.703rem"
            width="100%"
            height="100%"
          />
        );
      case 'box-down':
        return (
          <BoxDownSVG
            maxHeight="0.703rem"
            maxWidth="0.703rem"
            width="100%"
            height="100%"
          />
        );
      default:
        return;
    }
  };

  const showTrendIcon = (isTrendUp: boolean) =>
    isTrendUp ? (
      <TrendUpSVG
        maxHeight="0.719rem"
        maxWidth="1.11rem"
        width="100%"
        height="100%"
      />
    ) : (
      <TrendDownSVG
        maxHeight="0.719rem"
        maxWidth="1.11rem"
        width="100%"
        height="100%"
      />
    );

  return (
    <Box display="flex" gap="xs" justifyContent="space-between" flexWrap="wrap">
      <Box display="flex">
        <Box
          width="1.25rem"
          minWidth="1.25rem"
          height="1.25rem"
          minHeight="1.25rem"
          bg="onSurface"
          color="inverseOnSurface"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="999px"
          mr="0.5rem"
        >
          {getTopIcon(icon)}
        </Box>
        <Typography
          variant="small"
          fontWeight="500"
          color="secondary.onSecondaryContainer"
          fontSize={['xs', 'xs', 'xs', 's']}
        >
          {t(description as TTranslatedMessage)}
        </Typography>
      </Box>
      <Box display="flex">
        <Box height="0.719rem" width="1.11rem" mr="0.578rem">
          {showTrendIcon(isTrendUp)}
        </Box>
        <Typography
          variant="small"
          fontWeight="500"
          fontSize={['xs', 'xs', 'xs', 's']}
          color={isTrendUp ? '#D9F99D' : '#FECACA'}
        >
          {trendAmount} %
        </Typography>
      </Box>
    </Box>
  );
};

export default CardTop;
