import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ModalContentProps } from './modal.types';

const LoadingContent: FC<ModalContentProps> = ({ message }) => (
  <Box
    pb="2.25rem"
    pt="2.625rem"
    borderTop="1px solid"
    borderColor="#B6C4FF33"
    flexDirection="column"
    alignItems="center"
    display="flex"
    width="21.25rem"
  >
    <ProgressIndicator variant="loading" size={48} />
    <Typography variant="medium" mt="1rem" px="5rem">
      {message}
    </Typography>
  </Box>
);

export default LoadingContent;
