import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { WalletTabItemProps } from './menu-profile.types';

const WalletTabItem: FC<WalletTabItemProps> = ({ Icon, description, id }) => {
  return (
    <Box display="flex">
      <Box>
        <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Box>
      <Box>
        <Typography variant="small" color="onSurface">
          {description}
        </Typography>
        <Typography variant="small" color="onSurface">
          {id}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletTabItem;
