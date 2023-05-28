import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Done } from '@/svg';

import { ModalContentProps } from './modal.types';

const ResultContent: FC<ModalContentProps> = ({ message }) => (
  <Box
    pb="3.375rem"
    pt="3.375rem"
    flexDirection="column"
    alignItems="center"
    display="flex"
    width="21.25rem"
  >
    <Done maxHeight="100%" maxWidth="100%" width="2.5rem" />
    <Typography variant="medium" mt="1rem" px="5rem">
      {message}
    </Typography>
  </Box>
);

export default ResultContent;
