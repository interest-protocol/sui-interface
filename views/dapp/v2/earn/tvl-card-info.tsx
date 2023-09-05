import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CaretUpSVG } from '@/svg';

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
          {Number(value.toFixed(5)).toPrecision()}%
        </Typography>
      </Box>
    );

  if (value < 0)
    return (
      <Box display="flex" color="error" alignItems="center" gap="s" as="span">
        <Box as="span" display="inline-flex" transform="scaleY(-1)">
          <CaretUpSVG
            maxWidth="0.391rem"
            maxHeight="0.391rem"
            width="0.391rem"
          />
        </Box>
        <Typography
          variant="small"
          as="span"
          color="secondary.onSecondaryContainer"
        >
          {Number(value.toFixed(5)).toPrecision()}%
        </Typography>
      </Box>
    );

  return (
    <Typography variant="small" as="span">
      {Number(value.toFixed(5)).toPrecision()}%
    </Typography>
  );
};

export default TVLCardInfo;
