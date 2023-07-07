import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TrendDownSVG, TrendUpSVG } from '@/svg';
import { formatNumber } from '@/utils';

import { APRCardTrendInfoProps } from './card.types';

const APRCardTrendInfo: FC<APRCardTrendInfoProps> = ({ value }) => {
  if (value > 0)
    return (
      <Box display="flex" color="success" alignItems="center" gap="s" as="span">
        <TrendUpSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        <Typography variant="small" as="span">
          {formatNumber(value).toString()}%
        </Typography>
      </Box>
    );

  if (value < 0)
    return (
      <Box display="flex" color="error" alignItems="center" gap="s" as="span">
        <TrendDownSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        <Typography variant="small" as="span">
          {formatNumber(value).toString()}%
        </Typography>
      </Box>
    );

  return (
    <Typography variant="small" as="span">
      {formatNumber(value).toString()}%
    </Typography>
  );
};

export default APRCardTrendInfo;
