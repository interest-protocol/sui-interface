import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { EarnContainerProps } from './earn.types';

const EarnContainer: FC<PropsWithChildren<EarnContainerProps>> = ({
  columns,
  children,
}) => (
  <Box
    gap="l"
    width="100%"
    display="grid"
    borderRadius="m"
    gridTemplateColumns={[
      '1fr',
      '1fr',
      `repeat(${columns - 1}, 1fr)`,
      `repeat(${columns}, 1fr)`,
    ]}
  >
    {children}
  </Box>
);

export default EarnContainer;
