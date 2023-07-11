import { Box } from '@interest-protocol/ui-kit';
import { FC, ReactNode } from 'react';

interface EarnContainerProps {
  columns: number;
  children: ReactNode;
}

const EarnContainer: FC<EarnContainerProps> = ({ columns, children }) => {
  return (
    <Box
      borderRadius=".25rem"
      gridTemplateColumns={[
        '1fr',
        '1fr',
        `repeat(${columns - 1}, 1fr)`,
        `repeat(${columns}, 1fr)`,
      ]}
      gap="1rem"
      variant="container"
    >
      {children}
    </Box>
  );
};

export default EarnContainer;
