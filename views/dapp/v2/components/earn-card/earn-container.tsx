import { Box } from '@interest-protocol/ui-kit';
import { FC, ReactNode } from 'react';

interface EarnContainerProps {
  columns: number;
  children: ReactNode;
}

const EarnContainer: FC<EarnContainerProps> = ({ columns, children }) => {
  return (
    <Box
      p="0 2rem"
      display="grid"
      borderRadius=".25rem"
      gridTemplateColumns={`repeat(${columns}, 1fr)`}
      gap="1rem"
    >
      {children}
    </Box>
  );
};

export default EarnContainer;
