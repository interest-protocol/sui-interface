import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import { BondsFormModalProps } from './modal.types';

const HeaderModal: FC<Omit<BondsFormModalProps, 'onClick'>> = ({
  handleClose,
}) => (
  <Box
    px="xl"
    pt="xl"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    color="onSurface"
  >
    <Box></Box>
    <Box></Box>
    <Button variant="icon" onClick={handleClose}>
      <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Button>
  </Box>
);

export default HeaderModal;
