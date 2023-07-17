import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CaretUpSVG } from '@/svg';
import { formatNumber } from '@/utils';

const TVLCardInfo: FC<{ value: number }> = ({ value }) => {
  if (value > 0)
    return (
      <Box display="flex" color="success" alignItems="center" gap="s" as="span">
        <CaretUpSVG maxWidth="0.391rem" maxHeight="0.391rem" width="0.391rem" />
        <Typography
          variant="small"
          as="span"
          color="secondary.onSecondaryContainer"
        >
          {formatNumber(value).toString()}%
        </Typography>
      </Box>
    );

  if (value < 0)
    return (
      <Box display="flex" color="error" alignItems="center" gap="s" as="span">
        <CaretUpSVG maxWidth="0.391rem" maxHeight="0.391rem" width="0.391rem" />
        <Typography
          variant="small"
          as="span"
          color="secondary.onSecondaryContainer"
        >
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

export default TVLCardInfo;
