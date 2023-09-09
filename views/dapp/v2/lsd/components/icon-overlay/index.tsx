import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const IconOverlay: FC = () => (
  <Box
    top="0"
    right="0"
    bg="black"
    width="50%"
    height="100%"
    opacity="0.2"
    position="absolute"
  />
);

export default IconOverlay;
