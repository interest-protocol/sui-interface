import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

interface MidCardContainerProps {
  children?: React.ReactNode;
}

const MidCardContainer: FC<MidCardContainerProps> = ({ children }) => {
  return (
    <Box
      gridColumn="span 4"
      width="100%"
      display="flex"
      flexDirection="column"
      gap="1.5rem"
    >
      {children}
    </Box>
  );
};

export default MidCardContainer;
