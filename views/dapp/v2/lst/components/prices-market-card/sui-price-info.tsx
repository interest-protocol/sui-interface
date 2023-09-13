import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { formatDollars } from '@/utils';

import { SuiPriceInfoProps } from '../statistics.types';

const SuiPriceInfo: FC<SuiPriceInfoProps> = ({ amount }) => (
  <Box color="onSurface">
    <Typography variant="extraSmall" fontSize="0.688rem" mb="s">
      Sui
    </Typography>
    <Box display="flex" alignItems="center" gap="0.5rem">
      <Box
        color="white"
        bg="#6FBCF0"
        borderRadius="full"
        width="1.25rem"
        height="1.25rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SUISVG
          maxHeight="0.875rem"
          maxWidth="0.875rem"
          width="100%"
          height="100%"
        />
      </Box>
      <Typography variant="large" fontSize="1.375rem">
        {formatDollars(amount)}
      </Typography>
    </Box>
  </Box>
);

export default SuiPriceInfo;
