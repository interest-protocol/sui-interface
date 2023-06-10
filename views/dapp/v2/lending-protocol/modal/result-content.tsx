import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DoneSVG } from '@/svg';

import { ModalContentProps } from './modal.types';

const ResultContent: FC<ModalContentProps> = ({ message }) => (
  <Box
    py="3.375rem"
    flexDirection="column"
    borderTop="1px solid"
    borderColor="#B6C4FF33"
    alignItems="center"
    display="flex"
    width="21.25rem"
  >
    <DoneSVG maxHeight="100%" maxWidth="100%" width="2.5rem" />
    <Typography variant="medium" mt="1rem" px="5rem">
      {message}
    </Typography>
  </Box>
);

export default ResultContent;
