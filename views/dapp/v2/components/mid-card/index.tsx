import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

interface MidCardContainerProps {
  children?: React.ReactNode;
}

const MidCardContainer: FC<MidCardContainerProps> = ({ children }) => {
  return (
    <Box gridColumn="span 4" width="100%">
      {children}
    </Box>
  );
};

export default MidCardContainer;
