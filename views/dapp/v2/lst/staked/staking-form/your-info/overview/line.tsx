import { Box, Typography } from '@interest-protocol/ui-kit';
import React, { FC } from 'react';

import { LineProps } from './overview.type';

const Line: FC<LineProps> = ({ description, value }) => (
  <Box display="flex" justifyContent="space-between" width="100%">
    <Typography
      variant="extraSmall"
      color="onSurface"
      textTransform="capitalize"
    >
      {description}
    </Typography>
    {React.isValidElement(value) ? (
      value
    ) : (
      <Typography variant="extraSmall" color="onSurface">
        {value == '' ? '--' : value}
      </Typography>
    )}
  </Box>
);
export default Line;
