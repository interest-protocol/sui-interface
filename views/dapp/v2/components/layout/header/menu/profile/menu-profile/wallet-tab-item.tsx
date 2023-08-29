import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { WalletTabItemProps } from './menu-profile.types';

const WalletTabItem: FC<WalletTabItemProps> = ({ Icon, description, id }) => {
  return (
    <Box display="flex" gap="l">
      <Box p="s" bg="inverseSurface" display="flex" borderRadius="m">
        <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Box>
      <Box width="calc(100% - 7rem)">
        <Typography variant="small" color="onSurface">
          {description}
        </Typography>
        <Typography
          width="100%"
          overflow="hidden"
          color="outline"
          whiteSpace="nowrap"
          variant="extraSmall"
          textOverflow="ellipsis"
        >
          {id}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletTabItem;
